window.Model = function(options){
	let resourceName = options.resourceName
	return {
		// 初始化
		init: function(){
			var APP_ID = 'caAYqfnllQ5MyQAdC0i1b8z3-gzGzoHsz'
			var APP_KEY = 'tOSptj7vgvYB1BbsHuzH36Uc'
			AV.init({ appId: APP_ID, appKey: APP_KEY })
		},
		// 获取数据
		fetch: function(){
			var query = new AV.Query(resourceName)
			return query.find() // Promise对象
		},
		// 创建数据
		save: function(object){
			var X = AV.Object.extend(resourceName)
			var x = new X()
			return x.save(object) // Promise对象
		}
	}
}