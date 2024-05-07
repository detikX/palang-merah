$(document).ready(function () {
  AOS.init()
})

$(".quotationx").attr({ "data-aos": "fade-in", "data-aos-delay": "1500", "data-aos-duration": "800", "data-aos-easing": "linear" });

$(".wrap-detikx p, .containerx p, .containerx .imagex, .containerx .logo-jenewa").attr({ "data-aos": "fade-in", "data-aos-delay": "200", "data-aos-duration": "500", "data-aos-easing": "linear" });

$(".perawat").attr({ "data-aos": "fade-right", "data-aos-delay": "300", "data-aos-duration": "800", "data-aos-offset": "10", "data-aos-easing": "linear" });


var $ = jQuery.noConflict();
window.onload = () => {
  if ($(".company-timeline-year").length) {
    $(".timeline-date .date").html(function (i, html) {
      var chars = $.trim(html).split("");
      return "<span>" + chars.join("</span><span>") + "</span>";
    });
  }
};

window.onscroll = (e) => {
  $(".company-timeline-block").each(function (event) {
    var $this = $(this);
    // console.log($this);
    var tar_off =
      $(".company-timeline-list").height() +
      parseInt($(".company-timeline-list").css("top")) -
      $(".company-timeline-year").height();
    var this_off = $(this).offset().top - tar_off;
    var win_scroll = $(window).scrollTop();

    // console.log('thisoff', this_off);
    // console.log('win_scroll', win_scroll);
    if (
      win_scroll > this_off &&
      win_scroll < this_off + $(".company-timeline-year").height()
    ) {

      $this.addClass("active").siblings().removeClass('active');
      var curr_index = $this.index();
      // console.log(curr_index);
      $(".timeline-date")
        .eq(curr_index)
        .addClass("animate")
        .siblings()
        .removeClass("animate");
    }


  });
};




$('.logo-pmi').slick({
  // slidesToShow: 3,
  // slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  // fade: true,
  speed: 500,
  cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  // cssEase: 'linear'
});





const pauseVar = "fa-pause-circle";
const playVar = "fa-play-circle";

const btns = document.querySelectorAll(".all");

function onChange(event) {
  const buttonElement = event.currentTarget;

  const isPlayButton = buttonElement.classList.contains(playVar);

  if (isPlayButton) {
    buttonElement.classList.remove(playVar);
    buttonElement.classList.add(pauseVar);
    $("#play-button").removeClass("animate__infinite");
    $("#myAudio").get(0).play();
  } else {
    buttonElement.classList.remove(pauseVar);
    buttonElement.classList.add(playVar);
    $("#play-button").addClass("animate__infinite");
    $("#myAudio").get(0).pause();
  }

  setTimeout(() => {
    buttonElement.classList.remove(pauseVar);
    buttonElement.classList.add(playVar);
    $("#play-button").addClass("animate__infinite");
    $("#myAudio").get(0).pause();
  }, 12000);

  // You can also use .toggle function on classList as mentioned by the person in other answer
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
  btn.addEventListener("click", onChange);
});


setTimeout(() => {
  $("#play-button").click()
}, 500);
