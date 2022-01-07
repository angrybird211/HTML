$(".menuBtn").click(function(){
    $("header .container ul").show();
    $(".menuBtn").hide();
    $(".closeBtn").css('display','flex');
    $(".closeBtn").css('background','#298D7F');
});
$(".closeBtn").click(function(){
    $("header .container ul").hide();
    $(".menuBtn").show();
    $(".closeBtn").hide();
});