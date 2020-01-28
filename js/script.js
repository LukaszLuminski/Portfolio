$(document).ready(function() {
  $(".scroll-down, .right a").on('click', function(event) {

    event.preventDefault();

    var full_url = this.href;

    var parts = full_url.split("#");
    var trgt = parts[1];

    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top;

    $('html, body').animate({
      scrollTop: target_top
    }, 1000);
    event.preventDefault();
  });
});

let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function() {

  $hamburger.toggleClass("is-active");

  if ((window.innerWidth < 1291) && (document.documentElement.scrollTop < 50) && ($hamburger.hasClass('is-active'))) {
    document.querySelector("header").style.filter = "blur(6px)";
  } else {
    document.querySelector("header").style.filter = "none";
  }

});

if (window.innerWidth < 1291) {
  $('.topnav .navLink').on('click', function() {
    myFunction();
    $hamburger.toggleClass("is-active");
    myFunction2();
  });
}

window.onload = function() {
  scrollFunction();
  if (window.innerWidth < 1291) {
    $('.right a').addClass('animated');
  } else {
    $('.right a').removeClass('animated');
  }

};


var cachedWidth = $(window).width();
$(window).resize(function() {
  var newWidth = $(window).width();
  if (newWidth !== cachedWidth) {
    scrollFunction();
    document.querySelector(".navigation").style.transition = "0s";

    document.querySelector("header").style.filter = "none";
    $('#myTopnav').removeClass('responsive');
    $hamburger.removeClass("is-active");

    if (window.innerWidth < 1291) {
      $('.right a').removeClass('animated');
    }
    cachedWidth = newWidth;
  }
});

//
// $(window).on("resize", function(e) {
//   scrollFunction();
//   document.querySelector(".navigation").style.transition = "0s";
//
//   document.querySelector("header").style.filter = "none";
//   $('#myTopnav').removeClass('responsive');
//   $hamburger.removeClass("is-active");
//
//   if (window.innerWidth < 1291) {
//     $('.right a').addClass('animated');
//   } else {
//     $('.right a').removeClass('animated');
//   }
// });

window.onscroll = function() {

  scrollFunction();
  // document.querySelector("header").style.filter = "none";
  document.querySelector(".navigation").style.transition = "0.4s";
  // if ($('#myTopnav').hasClass('responsive')) {
  //   myFunction();
  //   $hamburger.toggleClass("is-active");
  // }

};

if ($('.topnav').hasClass('responsive')) {
  $('.right a').addClass('animated');
} else {
  $('.right a').removeClass('animated');
}

// $(document).mouseup(function(e) {
//   var container = $(".navigation");
//
//   if (!container.is(e.target) && (container.has(e.target).length === 0) && ($hamburger.hasClass("is-active"))) {
//     myFunction();
//     $hamburger.toggleClass("is-active");
//
//     document.querySelector("header").style.filter = "none";
//   }
// });

$('.top-logo').click(function() {
  window.location.href = window.location.href;
});


function scrollFunction() {

  var $name = document.querySelector(".name");
  var $navigation = document.querySelector(".navigation");

  if (window.innerWidth > 500) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $(".hamburger").addClass('special');
      $('.hamburger-inner').addClass('special');
      $navigation.style.paddingTop = "5px";
      $navigation.style.paddingBottom = "1px";
      $navigation.style.backgroundColor = "white";
      $navigation.style.boxShadow = "0px 5px 21px -1px rgba(0, 0, 0, 0.18)";
      $name.style.fontSize = "2.2rem";
      $name.style.margin = "2px 0 0";
      $name.style.color = "black";
      document.querySelector(".surname").style.color = "grey";
      $('.navLink').attr('style', 'color: black');
      $(".navLink").on("mouseover", function() {

        $(this).attr('style', 'color: #0059b3');

      });
      $(".navLink").on("mouseleave", function() {

        $(this).attr('style', 'color: black');

      });
    } else {
      $(".hamburger").removeClass('special');
      $('.hamburger-inner').removeClass('special');
      $navigation.style.paddingTop = "15px";
      $navigation.style.paddingBottom = "15px";
      $navigation.style.background = "transparent";
      $navigation.style.boxShadow = "none";
      $name.style.color = "white";
      $name.style.fontSize = "2.7rem";
      $name.style.margin = "-1px 0 0";
      document.querySelector(".surname").style.color = "white";
      $('.navLink').attr('style', 'color: white');
      $(".navLink").on("mouseover", function() {

        $(this).attr('style', 'color: #99ccff');

      });
      $(".navLink").on("mouseleave", function() {

        $(this).attr('style', 'color: white');

      });
      if ($(".hamburger").hasClass("is-active")) {
        document.querySelector('header').style.filter = "blur(6px)";
      } else {
        document.querySelector('header').style.filter = "none";
      }
    }
  } else {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $(".hamburger").addClass('special');
      $('.hamburger-inner').addClass('special');
      $navigation.style.paddingTop = "5px";
      $navigation.style.paddingBottom = "1px";
      $navigation.style.backgroundColor = "white";
      $navigation.style.boxShadow = "0px 5px 21px -1px rgba(0, 0, 0, 0.18)";
      $name.style.fontSize = "1.9rem";
      $name.style.margin = "6px 0 0";
      $name.style.color = "black";
      document.querySelector(".surname").style.color = "grey";
      $('.navLink').attr('style', 'color: black');
      $(".navLink").on("mouseover", function() {

        $(this).attr('style', 'color: #0059b3');

      });
      $(".navLink").on("mouseleave", function() {

        $(this).attr('style', 'color: black');

      });
    } else {
      $(".hamburger").removeClass('special');
      $('.hamburger-inner').removeClass('special');
      $navigation.style.paddingTop = "15px";
      $navigation.style.paddingBottom = "15px";
      $navigation.style.background = "transparent";
      $navigation.style.boxShadow = "none";
      $name.style.color = "white";
      $name.style.fontSize = "2.1rem";
      $name.style.margin = "3px 0 0";
      document.querySelector(".surname").style.color = "white";
      $('.navLink').attr('style', 'color: white');
      $(".navLink").on("mouseover", function() {

        $(this).attr('style', 'color: #99ccff');

      });
      $(".navLink").on("mouseleave", function() {

        $(this).attr('style', 'color: white');

      });
      if ($(".hamburger").hasClass("is-active")) {
        document.querySelector('header').style.filter = "blur(6px)";
      } else {
        document.querySelector('header').style.filter = "none";
      }
    }
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction2() {
  var x = document.querySelector("header");
  if (x.style.filter = "blur(6px)") {
    x.style.filter = "none";
  } else {
    x.style.filter = "blur(6px)";
  }
}

$(".copyright").text(new Date().getFullYear());

$(".return-to-top").on('click', function() {
  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 1000);
  preventDefault();
});
