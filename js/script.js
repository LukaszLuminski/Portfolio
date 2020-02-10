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

$('.right a').on('click', function() {
  if (window.innerWidth < 1291) {
    myFunction();
    $hamburger.toggleClass("is-active");
    myFunction2();
  }
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function() {
  $('.right a').addClass('animated');
  $hamburger.toggleClass("is-active");

  if ((window.innerWidth < 1291) && (document.documentElement.scrollTop < 50) && ($hamburger.hasClass('is-active'))) {
    document.querySelector("header").style.filter = "blur(6px)";
  } else {
    document.querySelector("header").style.filter = "none";
  }
});

window.onload = function() {
  scrollFunction();
};

var cachedWidth = $(window).width();
$(window).resize(function() {
  let resizeTimer;
  var newWidth = $(window).width();
  if (newWidth !== cachedWidth) {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
    scrollFunction();
    document.querySelector(".navigation").style.transition = "0s";
    $('#myTopnav').removeClass('responsive');
    document.querySelector("header").style.filter = "none";
    $hamburger.removeClass("is-active");
    cachedWidth = newWidth;
  }
});

window.onscroll = function() {
  scrollFunction();
  document.querySelector(".navigation").style.transition = "0.4s";
};

$('.top-logo').click(function() {
  window.location.href = window.location.href;
});

function scrollFunction() {
  $('.right a').removeClass('animated');
  var $name = document.querySelector(".name");
  var $navigation = document.querySelector(".navigation");

  if (window.innerWidth > 500) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $(".hamburger").addClass('special');
      $('.hamburger-inner').addClass('special');
      $navigation.style.paddingTop = "8px";
      $navigation.style.paddingBottom = "0";
      $navigation.style.backgroundColor = "white";
      $navigation.style.boxShadow = "0px 5px 21px -1px rgba(0, 0, 0, 0.18)";
      $name.style.fontSize = "2rem";
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
      $name.style.fontSize = "2.3rem";
      $name.style.margin = "1px 0 0";
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
      $navigation.style.paddingTop = "6px";
      $navigation.style.paddingBottom = "0";
      $navigation.style.backgroundColor = "white";
      $navigation.style.boxShadow = "0px 5px 21px -1px rgba(0, 0, 0, 0.18)";
      $name.style.fontSize = "1.9rem";
      $name.style.margin = "5px 0 0";
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
      $name.style.margin = "5px 0 0";
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
