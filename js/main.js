//main
/*categorie-side*/
$(function() {
    $('#mall-carousel').rotateSlider({
  
    });

    setInterval(function(){
        $(".js-rotateslider-arrow.right").trigger("click");
     },1500);
    
    window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-NKXLFHKVZF');
  
});

var scWidthCart = screen.availWidth;
$(".cate-filter-opener").click(function () {
    if (scWidthCart < 800) {
        $(this).siblings().animate({
            height: 'toggle'
        }, 1500, "swing");
    }
    else {
    }
});


$(".cart-opener").click(function () {
    if (scWidthCart < 800) {
        $('.addtocart').animate({
            width: 'toggle'
        }, 0, "swing");
    }
    else {
        $('.addtocart').animate({
            width: 'toggle'
        }, 1300, "swing");
    }
    $(".addtocart").addClass("open-cart");
    $("body").addClass("lock");
});
$(".addtocart").click(function () {
    if (scWidthCart < 800) {
        $('.addtocart').animate({
            width: 'toggle'
        }, 0, "swing");
    }
    else {
        $('.addtocart').animate({
            width: 'toggle'
        }, 1300, "swing");
    }
    $(".addtocart").removeClass("open-cart");
    $("body").removeClass("lock");
});
$(".mbl-arrow-left").click(function () {
    $('.addtocart').animate({
        width: 'toggle'
    }, 0, "swing");
    $(".addtocart").removeClass("open-cart");
    $("body").removeClass("lock");
});
$(".addtocart .box").click(function (e) {
    e.stopPropagation();
});
