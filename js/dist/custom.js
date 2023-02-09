(function ($) {
    'use strict';

    var start = null;
    let isLoaded = false;
    var delta;

    var imgIndex = 0;

    $(window).on("load", function (e) {
        $('.new_preloader').fadeOut();
        
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            isLoaded = true;

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
            }
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
            on: {
                slideChange: function (swiper) {
                    let slideCur = swiper.slides[swiper.activeIndex];

                    let currentSlideTitle = slideCur.querySelector(
                        ".swiper-burn-title div"
                    );

                    gsap.to(currentSlideTitle, 2, {
                        width: "auto",
                        opacity: 1
                    });
                },
            },
        });

        window.swiperBurn = swiperBurn;

        window.addEventListener("scroll", function (e) {
            if (document.documentElement.scrollTop >= 500) {
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

        // preloaderImg.src = ".././wp-content/themes/perola/img/preloader/PRELOADER_in/PRELOADER_in_00000.png";

        // preloaderImg.onload = function () {
        //   ctx.drawImage(preloaderImg, 0, 0, 1920, 1080, 0, 0, 400, 400);
        // };

        let cursor = document.querySelector(".cursor");

        // window.addEventListener("mousemove", animation);

        // function animation(e) {
        //     cursor.style.top = e.clientY - 3 + "px";
        //     cursor.style.left = e.clientX - 4 + "px";
        // }

        // gsap.to(".section-h-trigger", {
        //   yPercent: -100,
        //   ease: "none",
        //   stagger: 0.5,
        //   scrollTrigger: {
        //     trigger: ".page",
        //     start: "top top",
        //     end: "+=300%",
        //     scrub: true,
        //     pin: true
        //   }
        // });

        // gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

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

        // ScrollTrigger.create({
        //   trigger: ".section-list",
        //   start: "top top",
        //   pin: true,
        //   pinSpacing: false,
        // });

        // ScrollTrigger.create({
        //   trigger: ".possibilities",
        //   start: "top top",
        //   pin: true,
        //   markers:true,
        //   pinSpacing: false
        // });

        $(document).on('click', 'li.current-menu-item a', function(e){
            e.preventDefault();
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

        let format = "DD.MM.YYYY";
        let today = moment();
        today.subtract(1, "days").format(format);
        var picker;

        // $(document).on("click", '.date_departure, .date_arrival:not(.oneway_trigger)', function (e) {
        //     if( picker ) {
        //         picker.destroy();
        //     }
        //     var current = this,
        //         litepickerOptions;
        //     $('.current_departure').removeClass('current_departure');
        //     $('.current_arrival').removeClass('current_arrival');

        //     $(this).addClass('current_departure');
        //     $(this).closest('.modal-order-date').find('.date_arrival').addClass('current_arrival');

        //     if ( $(current).hasClass('oneway_trigger') ){
        //         litepickerOptions = {
        //             element: document.querySelector(".current_departure"),
        //             dropdowns: {
        //                 minYear: 1990,
        //                 maxYear: null,
        //                 months: false,
        //                 years: false,
        //             },
        //             singleMode: true,
        //             showTooltip: false,
        //             position: "bottom",
        //             numberOfColumns: 1,
        //             numberOfMonths: 1,
        //             lang: current_language,
        //             format: "DD.MM.YY",
        //             lockDaysFormat: "DD.MM.YY",
        //             highlightedDaysFormat:  "DD.MM.YY",
        //             setup: (picker) => {
        //                 picker.on('show', () => {
        //                     if ( $(current).hasClass('oneway_trigger') ){
        //                         $('.litepicker').addClass('oneway');
        //                         picker.setOptions({singleMode:true});
        //                     } 
        //                     $(current).addClass('current_litepicker_date');
        //                 });
        //                 picker.on('hide', () => {
        //                     $('.current_litepicker_date').removeClass('current_litepicker_date');
        //                     picker.destroy();
        //                 });
        //             },
        //         };
        //     } else {
        //         litepickerOptions = {
        //             element: document.querySelector(".current_departure"),
        //             elementEnd : document.querySelector(".current_arrival"),
        //             dropdowns: {
        //                 minYear: 1990,
        //                 maxYear: null,
        //                 months: false,
        //                 years: false,
        //             },
        //             // singleMode: singleMode,
        //             showTooltip: false,
        //             position: "bottom",
        //             numberOfColumns: 1,
        //             numberOfMonths: 1,
        //             // lang: current_language,
        //             format: "DD.MM.YY",
        //             lockDaysFormat: "DD.MM.YY",
        //             highlightedDaysFormat:  "DD.MM.YY",
        //             setup: (picker) => {
        //                 picker.on('show', () => {
        //                     if ( $(current).hasClass('oneway_trigger') ){
        //                         $('.litepicker').addClass('oneway');
        //                         picker.setOptions({singleMode:true});
        //                     } 
        //                     $(current).addClass('current_litepicker_date');
        //                 });
        //                 picker.on('hide', () => {
        //                     $('.current_litepicker_date').removeClass('current_litepicker_date');
        //                     picker.destroy();
        //                 });
        //             },
        //         };
        //     }

        //     picker = new Litepicker(litepickerOptions);

        //     picker.show();
        // });

        $(document).on("click", ".modal-order-date", function (e) {
            $(".c-calendar").addClass("active");
        });

        $(document).on("click", function (e) {
            if (e.target.classList.contains("input-calendar")) {
                return;
            }

            $(".c-calendar").removeClass("active");
        });

        $(".btn-modal-mob").on("click", function (e) {
            e.preventDefault();

            if (!infoSwiper) {
                infoSwiper = new Swiper(".info-swiper", {
                    loop: false,
                    allowTouchMove: false,
                    allowSlideNext: false,
                    followFinger: false,
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
            $(".pin-spacer").css('background-color', '#007180');
            $(".page header, .page section").hide();
            
        });

        $(".fixed-modal-close, .modal-thanks").on("click", function (e) {
            $(".fixed-modal-overlay").removeClass("active");
            $(".modal").removeClass("active");
            $(".pin-spacer").css('background-color', 'transparent');
            $(".page header, .page section").show();
            
            $(".modal-info-holder").css("display", "block");
            $(".modal-thanks").css("display", "none");
            gsap.to(modalSteps, {
                x: 0,
                duration: 0,
            });
        });

        $(".step-back-mob").on("click", function (e) {
            $(".step-back-mob").removeClass("active");
            infoSwiper.destroy();
            $('.swiper-wrapper').html('');
        });

        $(".step-back").on("click", function (e) {
            $('.modal-step.info-user-step').hide();
            infoSwiper.destroy();
            gsap.to(modalSteps, {
                x: 0,
                duration: 0,
            });
        });

        $(".modal-info-btn").on("click", function (e) {
            e.preventDefault();
            $('#order_name, #order_phone, #order_email').css('background-color', '#fff');

            if($("#final_checkbox").prop('checked') != true){
                if( current_language == "ru" ) {
                    alert('Примите условия Политики конфиденциальности');
                } else {
                    alert('Аccept the terms of the privacy policy');
                }
                
                return false;
            }

            var from = $('.autocomplete-from').map(function () {
                    return $(this).val();
                }).get(),
                to = $('.autocomplete-to').map(function () {
                    return $(this).val();
                }).get(),
                date_departure = $('.date_departure').map(function () {
                    return $(this).val();
                }).get(),
                date_arrival = $('.date_arrival').map(function () {
                    return $(this).val();
                }).get(),
                passengers = $('.passengers_qty').map(function () {
                    return $(this).val();
                }).get();

            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: 'post',
                data: {
                    action: 'submit_order',
                    from: from,
                    to: to,
                    date_departure: date_departure,
                    date_arrival: date_arrival,
                    passengers: passengers,
                    order_name: $('#order_name').val(),
                    order_phone: $('#order_phone').val(),
                    order_email: $('#order_email').val(),
                    order_comment: $('#order_comment').val()
                },
                beforeSend: function () {
                    $('#submit_preloader').show();
                },
                success: function (response) {
                    $('#submit_preloader').hide();
                    for (var key in response) {
                        switch (key) {
                            case "error_name":
                                $('#order_name').css('background-color', '#ffcece');
                                break;
                            case "error_phone":
                                $('#order_phone').css('background-color', '#ffcece');
                                break;
                            case "error_email":
                                $('#order_email').css('background-color', '#ffcece');
                                break;
                            default:
                                $(".step-back-mob").removeClass("active");
                                $(".modal-info-holder").fadeOut(200);
                                $(".modal-thanks").fadeIn(200);
                                $(".autocomplete-from, .autocomplete-to, .date_departure, .date_arrival, .passengers_qty").val('');
                        }
                    }
                }
            });
        });

        $('.hamburger').on('click', function (e) {

            $('.mob-menu').slideDown(200);


        });

        $('.mob-menu-close').on('click', function (e) {

            $('.mob-menu').slideUp(200);


        });

        $(document).on('click', '.modal-booking-remove', function () {
            $(this).closest('.modal-booking-line-holder').remove();
        });

        $(document).on('click', '.get_order_form', function (e) {
            e.preventDefault();

            var required = $('input').filter('[required]:visible'),
                allRequired = true;

            required.each(function(){
                $(this).css('background-color', '#FFFFFF');
            });

            required.each(function(){
                if($(this).val() == ''){
                    allRequired = false;
                    $(this).css('background-color', '#FFCECE');
                }
            });

            $('input.is_numeric').each(function(){
                if( $.isNumeric( $(this).val() ) === false ){
                    allRequired = false;
                    $(this).css('background-color', '#FFCECE');
                }
            });

            if(!allRequired){
                return false;
            }

            var from = $('.autocomplete-from').map(function () {
                    return $(this).val();
                }).get(),
                to = $('.autocomplete-to').map(function () {
                    return $(this).val();
                }).get(),
                date_departure = $('.date_departure').map(function () {
                    return $(this).val();
                }).get(),
                date_arrival = $('.date_arrival').map(function () {
                    return $(this).val();
                }).get(),
                passengers = $('.passengers_qty').map(function () {
                    return $(this).val();
                }).get();

            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: 'post',
                data: {
                    action: 'order_form',
                    from: from,
                    to: to,
                    date_departure: date_departure,
                    date_arrival: date_arrival,
                    passengers: passengers
                },
                beforeSend: function () {},
                success: function (response) {
                    $('.swiper-wrapper').append(response);

                    infoSwiper = new Swiper(".info-swiper", {
                        loop: false,
                        allowTouchMove: false,
                        allowSlideNext: false,
                        followFinger: false,
                        navigation: {
                            nextEl: ".info-button-next",
                            prevEl: ".info-button-prev",
                        },
                    });


                    infoSwiper.update();

                    $('.modal-step.info-user-step').show();
                    
                    let modalStepWidth = $(modalStep).innerWidth();

                    gsap.to(modalSteps, {
                        x: -modalStepWidth,
                        duration: 0.5,
                    });
                }
            });
        });

        // Подбор городов из базы
        var delayTimer = null;
        $(document).on('keydown', '.autocomplete-from, .autocomplete-to', function() {
            var input = this,
                value = $(this).val();

            if (delayTimer) {  
                clearTimeout(delayTimer);
            }
            delayTimer = setTimeout(function() {
                $('#cities_holder').remove();

                if( value.length >= 2 ) {
                    $.ajax({
                        url: '/wp-admin/admin-ajax.php',
                        type: 'post',
                        data: {
                            action: 'select_city',
                            current_language : $('#current_language').val(),
                            value: value
                        },
                        beforeSend: function () {
                            $(input).addClass('loader');
                        },
                        success: function (response) {
                            if( response != '') {
                                $(input).removeClass('loader');
                                $(input).closest('.modal-order-input-core').append('<div id="cities_holder"><ul></ul></div>');
                                for (var key in response) {
                                    $('#cities_holder ul').append('<li>' + response[key][0] + ', <span class="country">' + response[key][1] + ',</span> <span class="iso">' + response[key][2] + '</span></li>');
                                }
                            }
                        }
                    });
                }
            }, 1000);
        });

        $(document).on('click', '#cities_holder ul li', function() {
            $(this).closest('.modal-order-input-core').find('.autocomplete-from').val( $(this).text() );
            $(this).closest('.modal-order-input-core').find('.autocomplete-to').val( $(this).text() );
            $('#cities_holder').remove();
        });

        // Выбор предложения города клавишами
        var keyCounter = 0;
        $(document).on('keydown', '.autocomplete-from, .autocomplete-to', function(e) {
            var key = e.keyCode,
                $listItems = $('#cities_holder ul li'),
                $selected = $listItems.filter('.selected'),
                $current,
                $input = $(this);

            keyCounter++;
            if (keyCounter > 1) {
                if (key == 40) { // Down key
                    $selected.focus();
                    if (!$selected.length || $selected.is(':last-child')) {
                        $current = $listItems.eq(0);
                    } else {
                        $current = $selected.next();
                    }
                } else if (key == 38) { // Up key
                    if (!$selected.length || $selected.is(':first-child')) {
                        $current = $listItems.last();
                    } else {
                        $current = $selected.prev();
                    }
                } else if (key == 13) {
                    e.preventDefault();
                    $input.val($selected.text());
                    keyCounter = 0;
                    $('#cities_holder').remove();
                }

                if ($current) {
                    $listItems.removeClass('selected');
                    $current.addClass('selected');
                    $current.focus();
                }
            }
        });

        // Переключатель "В одну сторону"
        $(document).on('click', '.litepicker', function(){
            if( $(this).hasClass('oneway') ) {
                $(this).removeClass('oneway');
                $('.current_litepicker_date').closest('.modal-booking-line-holder').find('input').removeClass('oneway_trigger');
                $('.current_litepicker_date')
                    .closest('.modal-booking-line-holder')
                    .find('.back_date input')
                    .attr('disabled', false)
                    .attr('required', true)
                    .val('')
                    .css('opacity', '1');
                picker.destroy();
            } else {
                $(this).addClass('oneway');
                $('.current_litepicker_date').closest('.modal-booking-line-holder').find('input').addClass('oneway_trigger');
                $('.current_litepicker_date').closest('.modal-booking-line-holder').find('.date_arrival').val('');
                $('.current_litepicker_date')
                    .closest('.modal-booking-line-holder')
                    .find('.back_date input')
                    .attr('disabled', 'disabled')
                    .attr('required', false)
                    .val('')
                    .css('opacity', '0.7');
                picker.destroy();
                picker.setOptions({singleMode:true});
            }
        });

        $(document).on('click', '.input-direction-change', function(){
            var from = $(this).closest('.modal-booking-line-holder').find('.autocomplete-from').val(),
                to = $(this).closest('.modal-booking-line-holder').find('.autocomplete-to').val();
            $('.autocomplete-from').val(to);
            $('.autocomplete-to').val(from);
        });

        var manifestSection = gsap.utils.toArray(".section-h-trigger section section-title-a");

    });

})(jQuery);