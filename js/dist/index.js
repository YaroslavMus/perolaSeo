(function () {
  'use strict';

  


  $(window).on("load", function (e) {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {

      $(".preloader").css("display", "none");

      $("html").css("overflow", "visible");
    }, 1000);

    let headerEl = document.querySelector(".header");
    let logoImgEl = document.querySelector(".logo-img");

    let fixedCallEl = document.querySelector(".fixed-call");

    let cursorEl = $(".cursor");

    let sectionTrigger = document.querySelectorAll(".section-h-trigger");

    let modal = document.querySelector(".modal");

    let $modalBookingHolder = $(".modal-booking-line-holder");
    let modalStep = document.querySelector(".modal-step");
    let modalSteps = document.querySelector(".modal-steps");

    let infoSwiper;

    let swiperPossibilities = new Swiper(".swiper-possibilities", {
      navigation: {
        nextEl: ".swiper-possibilities .swiper-button-next",
        prevEl: ".swiper-possibilities .swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-possibilities .swiper-scrollbar",
      },
      slidesPerView: "auto",
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: "auto",
        },
      },
    });

    let swiperBurn = new Swiper(".swiper-burn", {
      centeredSlides: true,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 700,
      autoplay: {
        delay: 7900,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // lazy: {
      //   loadPrevNext: true,
      //   loadPrevNextAmount: 1,
      //   elementClass: "swiper-lazy",
      //   loadingClass: "swiper-lazy-loading",
      //   loadedClass: "swiper-lazy-loaded",
      //   preloaderClass: "swiper-lazy-preloader",
      // },
      on: {
        slideChange: function (swiper) {
          let slideCur = swiper.slides[swiper.activeIndex];

          let currentSlideTitle = slideCur.querySelector(
            ".swiper-burn-title div"
          );

          // var tl = new TimelineMax();

          gsap.to(currentSlideTitle, 2, { width: "auto", opacity: 1 });
        },
      },
    });

    window.swiperBurn = swiperBurn;

    window.addEventListener("scroll", function (e) {
      if (document.documentElement.scrollTop >= 100) {
        headerEl.classList.add("header-state-scrolling");
        return;
      }

      headerEl.classList.remove("header-state-scrolling");
    });

    function onChangeSection(self) {
      let section = self.trigger;
      if (section.dataset.sectionTrigger == "light") {
        headerEl.classList.remove("header-logo-light");
        headerEl.classList.add("header-logo-dark");
      }

      if (section.dataset.sectionTrigger == "dark") {
        headerEl.classList.remove("header-logo-dark");
        headerEl.classList.add("header-logo-light");
      }

      if (section.dataset.sectionTrigger == "default") {
        headerEl.classList.remove("header-logo-dark");
        headerEl.classList.remove("header-logo-light");
      }
    }

    function onChangeSectionFixedCall(self) {
      let section = self.trigger;
      if (section.dataset.sectionTrigger == "light") {
        fixedCallEl.classList.add("fixed-call-dark");
        fixedCallEl.classList.remove("fixed-call-default");
      }

      if (section.dataset.sectionTrigger == "dark") {
        fixedCallEl.classList.remove("fixed-call-dark");
        fixedCallEl.classList.remove("fixed-call-default");
      }

      if (section.dataset.sectionTrigger == "default") {
        fixedCallEl.classList.remove("fixed-call-dark");
        fixedCallEl.classList.add("fixed-call-default");
      }
    }

    var sections = gsap.utils.toArray(".section-h-trigger");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",

        end: "bottom top",

        onEnter: onChangeSection,

        onEnterBack: onChangeSection,
      });
    });

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=44px",

        end: "bottom bottom-=154px",

        onEnter: onChangeSectionFixedCall,

        onEnterBack: onChangeSectionFixedCall,
      });
    });


    let cursor = document.querySelector(".cursor");


 



    ScrollTrigger.create({
      trigger: ".hero:not(.hero-static)",
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".desc",
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

   

    $(
      "a, input[type='submit'], .fixed-modal-close, .modal-booking-add, input[type='submit'], .input-direction-change"
    ).hover(
      function () {
        cursorEl.addClass("cursor-scale ");
      },
      function () {
        cursorEl.removeClass("cursor-scale ");
      }
    );

    var sectionsTitle = gsap.utils.toArray(".section-title-a");

    // sectionsTitle.forEach(function (el) {
    //   gsap.from(el.querySelector(".title-l-a"), {
    //     opacity: 0,
    //     y: 100,
    //     scrollTrigger: {
    //       trigger: el,
    //       scrub: 0.1,

    //       start: "top-=40% bottom",
    //     },
    //   });
    // });

    $(".fixed-call").on("click", function (e) {});

    const picker = new Litepicker({
      element: document.querySelector(".modal-order-date .input-calendar-core"),
      dropdowns: {
        minYear: 1990,
        maxYear: null,
        months: true,
        years: true,
      },
      singleMode: false,
      numberOfColumns: 2,
      numberOfMonths: 2,
      lang: "ru",
      startDate: new Date(),
      setup: (picker) => {
        picker.on("selected", (date1, date2) => {

        });
      },
    });

    $(".input-calendar").on("click", function (e) {
      // if (e.target.dataset.inputCalendarType === "departure") {
      //   picker.setSingleMode(true);
      // } else {
      //   picker.setSingleMode(false);
      // }
      // picker.show();
    });

   

   

    


    $(".input-direction-change").on("click", function (e) {});

    $(".modal-booking-add").on("click", function (e) {});

    $(".modal-order-date").on("click", function (e) {});

    $(document).on("click", ".modal-order-date", function (e) {
      $(".c-calendar").addClass("active");
    });

    $(document).on("click", function (e) {
      if (e.target.classList.contains("input-calendar")) {
        return;
      }

      $(".c-calendar").removeClass("active");
    });

    $(".submit-btn, .btn-modal-mob").on("click", function (e) {
      e.preventDefault();

      if (!infoSwiper) {
        infoSwiper = new Swiper(".info-swiper", {
          loop: false,
          allowTouchMove: false,
          navigation: {
            nextEl: ".info-button-next",
            prevEl: ".info-button-prev",
          },
        });
      }

      let modalStepWidth = $(modalStep).innerWidth();

      gsap.to(modalSteps, {
        x: -modalStepWidth,
        duration: 0.5,
      });

      $(".step-back-mob").addClass("active");
    });

    $(".fixed-call-body").on("click", function (e) {
      $(".fixed-modal-overlay").addClass("active");
      $(".modal").addClass("active");
    });

    $(".fixed-modal-close").on("click", function (e) {
      $(".fixed-modal-overlay").removeClass("active");
      $(".modal").removeClass("active");
      $(".modal-info-holder").css("display", "block");
      $(".modal-thanks").css("display", "none");
      gsap.to(modalSteps, {
        x: 0,
        duration: 0,
      });
    });

    $(".step-back, .step-back-mob").on("click", function (e) {
      $(".step-back-mob").removeClass("active");
      gsap.to(modalSteps, {
        x: 0,
        duration: 0,
      });
    });

    $(".modal-info-btn").on("click", function (e) {
      e.preventDefault();
      $(".step-back-mob").removeClass("active");
      $(".modal-info-holder").fadeOut(200);
      $(".modal-thanks").fadeIn(200);
    });

    $('.hamburger').on('click', function (e) {
      
      $('.mob-menu').slideDown(200);
    

    });

    $('.mob-menu-close').on('click', function (e) {
      
     $('.mob-menu').slideUp(200);
    

    });

    var manifestSection = gsap.utils.toArray(".section-h-trigger section section-title-a");

  });

}());
