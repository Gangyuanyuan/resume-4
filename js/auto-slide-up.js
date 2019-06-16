!function(){
	// 去除loading动画
	setTimeout(function(){
	    siteWelcome.classList.remove('active')
	}, 800)
	
	// 添加offset类
	let specialTags = document.querySelectorAll('[data-x]')
	for(let i=0; i<specialTags.length; i++){
		specialTags[i].classList.add('offset')
	}
	// 找到最近的模块移除它的offset类
	setTimeout(function(){
		findClosestAndRemoveOffset()
	  }, 800)   // 由于loading动画有800毫秒延迟，此处需延迟才能看到效果
	window.addEventListener('scroll', function(x){
		findClosestAndRemoveOffset()
	})


	/* helper */
	function findClosestAndRemoveOffset(){   // 找离窗口最近的标签
		let specialTags = document.querySelectorAll('[data-x]')
		let minIndex = 0
		for(let i=1; i<specialTags.length; i++){
			if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
				minIndex = i
			} 
		}
	    // minIndex 就是离窗口最近的元素
	    specialTags[minIndex].classList.remove('offset')
	    let id = specialTags[minIndex].id
	    let a = document.querySelector('a[href="#'+ id +'"]')
	    // id == 'siteAbout'    'a[heref="#siteAbout"]'
	    let li = a.parentNode
	    let brothersAndMe = li.parentNode.children
	    for(let i=0; i<brothersAndMe.length; i++){
	    	brothersAndMe[i].classList.remove('highlight')
	    }
	    li.classList.add('highlight')
	}

	let liTags = document.querySelectorAll('nav.menu > ul > li') // 选择器所匹配的所有li标签
    for(let i=0; i<liTags.length; i++){
        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')  // currentTarget：监听的元素
        }
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active')
        }
    }
    
}.call()
