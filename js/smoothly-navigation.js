!function(){
    let liTags = document.querySelectorAll('nav.menu > ul > li') // 选择器所匹配的所有li标签
    for(let i=0; i<liTags.length; i++){
        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')  // currentTarget：监听的元素
        }
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active')
        }
    }
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);  // 向浏览器请求动画帧率
    for(let i=0; i<aTags.length; i++){
        aTags[i].onclick = function(x){
            x.preventDefault()   // 阻止默认动作
            let a = x.currentTarget
            let href = a.getAttribute('href') // 获取 a 标签上的 href，'#siteAbout'等
            let element = document.querySelector(href) // 以 href 字符串为选择器获取元素
            let top = element.offsetTop // 得到 element 上部的距离

            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop // 路程
            var t = Math.abs((s/100)*300)  // 求时间的绝对值
            if(t>500) { t = 500 }
            var coords = {y: currentTop}; // 起始位置
            var tween = new TWEEN.Tween(coords)   // 缓动函数 初始位置
            .to({ y: targetTop}, t)   // 目标位置和时间
            .easing(TWEEN.Easing.Quadratic.InOut)  // 缓动类型 淡入淡出
            .onUpdate(function() {   // 每次变化需执行的代码
              window.scrollTo(0, coords.y)  // y 是计算之后的值，不是初始的值
            })
            .start(); // 开始缓动
        }
    }
}.call()
