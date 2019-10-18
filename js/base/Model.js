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
			// var now = new Date()
			// query.lessThanOrEqualTo('createdAt', now) // 查询今天之前的内容
			// query.limit(10) // 最多返回10条结果
			// query.descending('createdAt') // 降序排列展示最新内容
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