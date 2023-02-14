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
$('.question-card-title').click(function () {
  let item = $(this).next();
  switch ($(this).hasClass('question-card-title go')) {
    case false:
      $(item).slideDown();
      $(this).addClass('go');
      break;

    default:
      $(item).slideUp();
      $(this).removeClass('go');
      break;
  }
});
console.log($('.checkbox'));

$('.checkbox-core').on('change', function () {
  if ($(this).prop('checked')) {
    $('.button').attr('disabled', false);
  } else {
    $('.button').attr('disabled', true);
  }
});
$('.select').on('click', '.select__head', function () {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(this).next().fadeOut();
  } else {
    $('.select__head').removeClass('open');
    $('.select__list').fadeOut();
    $(this).addClass('open');
    $(this).next().fadeIn();
  }
});

$('.select').on('click', '.select__item', function () {
  $('.select__head').removeClass('open');
  $(this).parent().fadeOut();
  $(this).parent().prev().text($(this).text());
  $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
  if (!$(e.target).closest('.select').length) {
    $('.select__head').removeClass('open');
    $('.select__list').fadeOut();
  }
});

$('.fly-btn').on('click', function () {
  $('.fly-container').toggleClass('fly-container-open');
});
