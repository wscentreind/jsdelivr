jQuery(document).ready(function() {

    var activeSlide = 0;
    
    var bannerSliderTop = new Swiper('.js-gallery-top', {
    
    preloadImages: false,
    
    lazyLoading: true,
    
    lazyLoadingInPrevNext: true,
    
    slidesPerView: 1,
    
    });
    
    var bannerRoundSlider = new Swiper('.js-gallery-thumbs', {
    
    centeredSlides: true,
    
    slidesPerView: 1,
    
    touchRatio: 0.2,
    
    nextButton: '.js-gallery-thumbs .swiper-button-next',
    
    prevButton: '.js-gallery-thumbs .swiper-button-prev',
    
    pagination : '.banner-backgrounds .swiper-pagination',
    
    paginationClickable: true,
    
    lazyLoadingInPrevNext: true,
    
    onSlideChangeEnd: function(swiper) {
    
    activeSlide = swiper.activeIndex;
    
    },
    
    paginationBulletRender: function (swiper, index, className) {
    
    if (index === 0) {
    
    return (
    
    '<div class="'+ className +'">' +
    
    '<img class="bullet-img" src="images/website-icon.png" alt="Web Designing Company In India">' +
    
    '<img class="bullet-img-active" src="images/website-icon-active.png" alt="Website Designing Company In India">' +
    
    '</div>'
    
    )
    
    } else if (index === 1) {
    
    return (
    
    '<div class="'+ className +'">' +
    
    '<img class="bullet-img" src="images/ecommerce-development-icon.png" alt="Website Development Company India">' +
    
    '<img class="bullet-img-active" src="images/ecommerce-development-icon-active.png" alt="Web Development Company In India">' +
    
    '</div>'
    
    )
    
    } else if (index === 2) {
    
    return (
    
    '<div class="'+ className +'">' +
    
    '<img class="bullet-img" src="images/seo-icon.png" alt="Online Marketing In India">' +
    
    '<img class="bullet-img-active" src="images/seo-icon-active.png" alt="Online Marketing In India">' +
    
    '</div>'
    
    )
    
    } else if (index === 3) {
    
    return (
    
    '<div class="'+ className +'">' +
    
    '<img class="bullet-img" src="images/mobile-app-icon.png" alt="Mobile App Development Company In India">' +
    
    '<img class="bullet-img-active" src="images/mobile-app-icon-active.png" alt="Mobile App Design Company In India">' +
    
    '</div>'
    
    )
    
    }
    
    }
    
    });
    
    bannerRoundSlider.params.control = bannerSliderTop;
    
    var awardsSlider = new Swiper('.js-awards-container', {
    
    nextButton: '.awards-container .swiper-button-next',
    
    prevButton: '.awards-container .swiper-button-prev',
    
    });
    
    $('.js-inner-tabs-slider').each(function(index, item) {
    
    var progressMax;
    
    var progressLine;
    
    var _slider = $(item);
    
    var pagination = _slider.find('.js-pagination-slider');
    
    var sliderTabs = new Swiper(_slider, {
    
    pagination : _slider.find('.swiper-pagination'),
    
    paginationClickable: true,
    
    preloadImages: false,
    
    lazyLoading: true,
    
    nextButton: _slider.find('.swiper-button-next'),
    
    prevButton: _slider.find('.swiper-button-prev'),
    
    noSwipingClass: 'pagination-progress',
    
    nested: true,
    
    paginationBulletRender: function (swiper, index, className) {
    
    return (
    
    '<div class="'+ className +' swiper-slide">'+
    
    '<span>'+
    
    $(_slider.find('.swiper-slide')[index]).attr('data-tab-text') +
    
    '</span>'+
    
    '</div>'
    
    )
    
    },
    
    onPaginationRendered: function (swiper, paginationContainer) {
    
    progressMax = paginationContainer.clientWidth;
    
    progressLine = _slider.find('.pp-line');
    
    },
    
    onProgress: function (swiper, progress) {
    
    var progressWidth = swiper.bullets[swiper.snapIndex].clientWidth;
    
    var progressPosition = (progressMax * progress) - (progressWidth * progress);
    
    progressLine.css({
    
    width: progressWidth,
    
    transform: 'translate3d('+ progressPosition +'px, 0, 0)'
    
    });
    
    },
    
    });
    
    var paginationSlider = new Swiper(pagination, {
    
    grabCursor: false,
    
    simulateTouch: false,
    
    breakpoints: {
    
    1154: {
    
    slidesPerView: 1,
    
    grabCursor: true,
    
    simulateTouch: true,
    
    }
    
    }
    
    });
    
    sliderTabs.params.control = paginationSlider;
    
    paginationSlider.params.control = sliderTabs;
    
    });
    
    var linksForToggleTabs = $('.banner-round-container .plus-link');
    
    var swiperTabs = new Swiper('.js-swiper-tabs', {
    
    direction: 'vertical',
    
    slidesPerView: 1,
    
    touchRatio: 0,
    
    initialSlide: activeSlide,
    
    });
    
    swiperTabs.detachEvents();
    
    bannerSliderTop.params.control = swiperTabs;
    
    var caseStudyIsOpen = false;
    
    $('.banner-tabs-slider .red-close-btn').on('click', function() {
    
    caseStudyIsOpen = false;
    
    linksForToggleTabs.removeClass('pl-active').text('view case study');
    
    $('.banner-tabs-slider').addClass('tsc-hidden');
    
    body.stop().animate({scrollTop: 0}, 500, 'swing');
    
    });
    
    var gallerySlider = new Swiper('.js-gallery-slider', {
    
    pagination: '.js-gallery-slider .swiper-pagination',
    
    effect: 'coverflow',
    
    grabCursor: true,
    
    centeredSlides: true,
    
    slidesPerView: 'auto',
    
    loop: true,
    
    coverflow: {
    
    rotate: 50,
    
    stretch: 0,
    
    depth: 100,
    
    modifier: 1,
    
    slideShadows : true
    
    }
    
    });
    
    });


    $(document).ready(function() {
        $(window).scroll(function () {
          console.log($(window).scrollTop())
        if ($(window).scrollTop() > 40) {
          $('header').addClass('header-shrink');
        }
        if ($(window).scrollTop() < 40) {
          $('header').removeClass('header-shrink');
        }
      });
    });