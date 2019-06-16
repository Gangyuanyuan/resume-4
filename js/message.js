!function(){
	var view = View('section.message')

	var model = Model({resourceName:'Message'})

	var controller = Controller({
		messageList: null,
		form: null,
		init: function(view, model){
			this.messageList = view.querySelector('#messageList')
			this.form = view.querySelector('#postMessageForm')
			this.loadMessages()
		},
		loadMessages: function(){ // 在页面上展示留言
			this.model.fetch().then(
				(messages) => { // 箭头函数不会改变this
					let array = messages.map((item) => item.attributes)
					array.forEach((item) => {
						let li = document.createElement('li')
						li.innerText = `${item.name} : ${item.content}`
						this.messageList.appendChild(li)
					})
				}
			)
		},
		bindEvents: function(){ // 写入留言
			this.form.addEventListener('submit', function(e){
				e.preventDefault() // 阻止刷新页面
				this.saveMessage()
			}.bind(this)) // 绑定this
		},
		saveMessage: function(){
			let myForm = this.form
			let content = myForm.querySelector('input[name=content]').value
			let name = myForm.querySelector('input[name=name]').value
			this.model.save({
				'name': name, 'content': content
			}).then(function(object) {
				// 页面无刷新留言
				let li = document.createElement('li')
				li.innerText = `${object.attributes.name} : ${object.attributes.content}`
				let messageList = document.querySelector('#messageList')
				messageList.appendChild(li)
				// 清空输入框
				myForm.querySelector('input[name=name]').value = ''
				myForm.querySelector('input[name=content]').value = ''
			  	// window.location.reload(); // 刷新页面
			  	// alert('留言成功!');
			})
		}	
	})

	controller.init(view, model)

}.call()

