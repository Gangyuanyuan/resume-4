!function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,

        // Pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}.call()