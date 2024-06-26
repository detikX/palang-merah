$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    fade: true,
    // adaptiveHeight: true,
    arrows: false,
});

var $slickElement = $('.autoplay');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $status.text(i + '/' + slick.slideCount);
    $(".now").text(i);
    $(".totalx").text(slick.slideCount)
});