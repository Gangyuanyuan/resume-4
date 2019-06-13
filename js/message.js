// 初始化
var APP_ID = 'caAYqfnllQ5MyQAdC0i1b8z3-gzGzoHsz';
var APP_KEY = 'tOSptj7vgvYB1BbsHuzH36Uc';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 在页面上展示留言
var query = new AV.Query('Message');
query.find()
.then(
	function(messages){
		let array = messages.map((item) => item.attributes)
		array.forEach((item) => {
			let li = document.createElement('li')
			li.innerText = `${item.name} : ${item.content}`
			let messageList = document.querySelector('#messageList')
			messageList.appendChild(li)
		})
	}
)

// 写入留言
let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function(e){
	e.preventDefault() // 阻止默认事件（阻止刷新页面）
	let content = myForm.querySelector('input[name=content]').value
	let name = myForm.querySelector('input[name=name]').value
	var Message = AV.Object.extend('Message'); 
	var message = new Message(); 
	message.save({
		'name': name,
		'content': content
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
})


/*
// 测试
var TestObject = AV.Object.extend('TestObject'); // 创建TestObject表
var testObject = new TestObject(); // 在表中创建一行数据
testObject.save({ // 保存
  words: 'Hello World!' // 数据内容
}).then(function(object) { // 如果保存成功则运行alert('')
  alert('LeanCloud Rocks!');
})
*/