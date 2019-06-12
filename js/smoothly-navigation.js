!function(){
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        aTags: null,
        init: function(view){
            this.view = view
            this.initAnimation() // 初始化动画
            this.bindEvents() // 绑定事件
        },
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate); // 向浏览器请求动画帧率
        },
        bindEvents: function(){
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
            for(let i=0; i<aTags.length; i++){
                aTags[i].onclick = (x) => {
                    x.preventDefault()   // 阻止默认动作
                    let a = x.currentTarget
                    let href = a.getAttribute('href') // 获取 a 标签上的 href，'#siteAbout'等
                    let element = document.querySelector(href) // 以 href 字符串为选择器获取元素
                    this.scrollToElement(element)
                }
            }
        },
        scrollToElement: function(element){
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
        },
    }
     
    controller.init(view)
}.call()
