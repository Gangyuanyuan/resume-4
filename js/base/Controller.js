window.Controller = function(options){
	var init = options.init // 此处init是变量
	let object = {
		view: null,
		model: null,
		init: function(view,model){ // 此处init是属性
			this.view = view
			this.model = model
			this.model.init()
			init.call(this, view, model) // 这里的init是第一行的变量
			// 确定this要看调用它的函数（controller===object）
			options.bindEvents.call(this)
		},
	}
	for(let key in options){
		if(key !== 'init'){
			object[key] =options[key]
		}
	}
	return object
}