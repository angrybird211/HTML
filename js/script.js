$('#news-carousel').owlCarousel({
    margin:30,
    nav:true,
    navText: ["<button class='nav-item'><i class='bi-chevron-left'></i></button>","<button class='nav-item'><i class='bi-chevron-right'></i></button>"],
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

$(".hamMenuBtn").click(function(){
    $(".popupMenu").show();
});

$(".popupMenu .close-btn").click(function(){
    $(".popupMenu").hide();
});

new WOW().init();