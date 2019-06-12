!function(){
	var view = document.querySelector('#topNavBar')
	var controller = {
		view: null,
		init: function(view){ // 初始化view
			this.view = view // 此处的this看调用它的函数，是controller
			this.bindEvents()
			// this.bindEvents.call(this)
		},
		bindEvents: function(){ // 绑定view事件
			var view = this.view
			window.addEventListener('scroll', (x) => {
			  	if(window.scrollY > 0){
			    	this.active()
			  	}else{
			    	this.deactive()
			  	}
			}) // 箭头函数没有this，所以箭头函数内外this不变
		},
		active: function(){
			this.view.classList.add('sticky')
		},
		deactive: function(){
			this.view.classList.remove('sticky')
		},
	}
	controller.init(view)
	// controller.init.call(controller, view)
}.call()
