const swiperReviews = new Swiper('.reviews', {
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev',
  },

  scrollbar: {
    el: '.reviews .swiper-scrollbar',
  },
  slidesPerView: 'auto',
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 'auto',
    },
  },
});
let flag = false;
$('.question-card-title').click(function () {
  let item = $(this).next();
  if (!flag) {
    $(item).slideDown();
    $(this).addClass('go');
  } else {
    $(item).slideUp();
    $(this).removeClass('go');
  }
  flag = !flag;
});
console.log($('.checkbox'));

$('.checkbox-core').on('change', function () {
  if ($(this).prop('checked')) {
    $('.button').attr('disabled', false);
  } else {
    $('.button').attr('disabled', true);
  }
});
