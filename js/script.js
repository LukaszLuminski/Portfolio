/*jshint esversion: 6 */

$(document).ready(() => {
  $(".scroll-down, .right a").on('click', function(event) {
    event.preventDefault();
    const full_url = this.href;
    const parts = full_url.split("#");
    const trgt = parts[1];
    const target_offset = $(`#${trgt}`).offset();
    const target_top = target_offset.top;
    $('html, body').animate({
      scrollTop: target_top
    }, 1000);
    event.preventDefault();
  });
});

$('.right a').on('click', () => {
  if (window.innerWidth < 1291) {
    myFunction();
    $hamburger.toggleClass("is-active");
    myFunction2();
  }
});

var $hamburger = $(".hamburger");
$hamburger.on("click", () => {
  $('.right a').addClass('animated');
  $hamburger.toggleClass("is-active");

  if ((window.innerWidth < 1291) && (document.documentElement.scrollTop < 50) && ($hamburger.hasClass('is-active'))) {
    document.querySelector("header").style.filter = "blur(6px)";
  } else {
    document.querySelector("header").style.filter = "none";
  }
});

window.onload = () => {
  scrollFunction();
};

let cachedWidth = $(window).width();
$(window).resize(() => {
  let resizeTimer;
  const newWidth = $(window).width();
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

window.onscroll = () => {
  scrollFunction();
  document.querySelector(".navigation").style.transition = "0.4s";
};

$('.top-logo').click(() => {
  window.location.href = window.location.href;
});

function scrollFunction() {
  $('.modal').removeClass('animated');
  $('.right a').removeClass('animated');
  const $name = document.querySelector(".name");
  const $navigation = document.querySelector(".navigation");

  if (window.innerWidth > 500) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $(".hamburger").addClass('special');
      $('.hamburger-inner').addClass('special');
      $navigation.style.paddingTop = "6px";
      $navigation.style.paddingBottom = "1px";
      $navigation.style.backgroundColor = "white";
      $navigation.style.boxShadow = "0px 5px 21px -1px rgba(0, 0, 0, 0.18)";
      $name.style.fontSize = "2rem";
      $name.style.margin = "1px 0 0";
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
      $name.style.margin = "4px 0 0";
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
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function myFunction2() {
  const x = document.querySelector("header");
  if (x.style.filter === "blur(6px)") {
    x.style.filter = "none";
  } else {
    x.style.filter = "blur(6px)";
  }
}

$(".copyright").text(new Date().getFullYear());

$(".return-to-top").on('click', () => {
  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 1000);
  preventDefault();
});

const modal = $("#myModal");
const logo = $(".logo");
const span = $(".close");

let modalContent = $('.m-content');

let modalContent1 = $('.modal-html');
let modalContent2 = $('.modal-css');
let modalContent3 = $('.modal-js');
let modalContent4 = $('.modal-rwd');
let modalContent5 = $('.modal-nodejs');
let modalContent6 = $('.modal-mongodb');
let modalContent7 = $('.modal-wp');
let modalContent8 = $('.modal-sass');
let modalContent9 = $('.modal-bootstrap');
let modalContent10 = $('modal-jquery');
let modalContent11 = $('.modal-git');


logo.on('click', (e) => {
  modal.css('display', 'flex');
  modal.addClass('animated');
  let target = e.currentTarget;
  let result = target.className;
  console.log(result);
  if (result == 'logo html') {
    modalContent1.css('display', 'flex');
  } else if (result == 'logo css'){
    modalContent2.css('display', 'flex');
  } else if (result == 'logo js'){
    modalContent3.css('display', 'flex');
  } else if (result == 'logo rwd'){
    modalContent4.css('display', 'flex');
  } else if (result == 'logo node'){
    modalContent5.css('display', 'flex');
  } else if (result == 'logo mongodb'){
    modalContent6.css('display', 'flex');
  } else if (result == 'logo wp'){
    modalContent7.css('display', 'flex');
  } else if (result == 'logo sass'){
    modalContent8.css('display', 'flex');
  } else if (result == 'logo bootstrap'){
    modalContent9.css('display', 'flex');
  } else if (result == 'logo jquery'){
    modalContent10.css('display', 'flex');
  } else if (result == 'logo git'){
    modalContent11.css('display', 'flex');
  }
});

span.on('click', () => {
  modal.removeClass('animated');
  modal.fadeOut('fast', () => {
    modal.css('display', 'none');
    modalContent.css('display', 'none');
  });
});

$(window).on('click', (e) => {
  if ($(e.target).hasClass('modal')) {
    modal.removeClass('animated');
    modal.css('display', 'none');
    modalContent.css('display', 'none');
  }
});
