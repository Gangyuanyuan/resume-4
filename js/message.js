!function(){
	var view = document.querySelector('section.message')
	var model = {
		// 初始化
		init: function(){
			var APP_ID = 'caAYqfnllQ5MyQAdC0i1b8z3-gzGzoHsz'
			var APP_KEY = 'tOSptj7vgvYB1BbsHuzH36Uc'
			AV.init({ appId: APP_ID, appKey: APP_KEY })
		},
		// 获取数据
		fetch: function(){
			var query = new AV.Query('Message')
			return query.find() // Promise对象
		},
		// 创建数据
		save: function(name, content){
			var Message = AV.Object.extend('Message')
			var message = new Message()
			return message.save({ // Promise对象
				'name': name,
				'content': content
			})			
		}
	}
	var controller = {
		view: null,
		model: null,
		messageList: null,
		init: function(view, model){
			this.view = view
			this.model = model
			this.messageList = view.querySelector('#messageList')
			this.form = view.querySelector('#postMessageForm')
			this.model.init()
			this.loadMessages()
			this.bindEvents()
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
			this.model.save(name, content).then(function(object) {
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
	}
	controller.init(view, model)
}.call()

