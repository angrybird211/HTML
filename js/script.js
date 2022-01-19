$('#news-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ["<img src='./images/arrow-left.png'>","<img src='./images/arrow-right.png'>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

new WOW().init();