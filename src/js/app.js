document.addEventListener("DOMContentLoaded", function() {

  // Promo-Swiper
  function updSwiperNumericPagination() {
    this.el.querySelectorAll( '.swiper-counter' ).forEach(el => {
      el.innerHTML = `<span class="count">${this.realIndex >= 9 ? '' : '0'}${this.realIndex + 1}</span>/<span class="total">${this.el.slidesQuantity > 10 ? '' : '0'}${this.el.slidesQuantity}</span>`;
    });
  }
  
  document.querySelectorAll( '.promo.swiper-container' ).forEach( function( node ) {
    node.slidesQuantity = node.querySelectorAll( '.swiper-slide' ).length;
    new Swiper( node, {
      pagination: { 
        el: node.querySelector('.swiper-pagination'),
        clickable: true
      },
      on: { 
        init:        updSwiperNumericPagination,
        slideChange: updSwiperNumericPagination
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoHeight: true
    });
  });

  // Articles-Swiper
  const articlesSlide = document.querySelectorAll('.articles__tabs.swiper-container .swiper-slide');
  if (articlesSlide.length <= 4 && document.documentElement.clientWidth > 991) {
    var articlesSwiper = new Swiper('.articles__tabs.swiper-container', {
      spaceBetween: 10,
      slidesPerView: 4,
      breakpoints: {
        991: {
          slidesPerView: 4,
          loop: false
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          loopFillGroupWithBlank: true,
          loop: true
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          loopFillGroupWithBlank: true,
          loop: true
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loopFillGroupWithBlank: true,
          loop: true
        }
      }
    });
  } else if (document.documentElement.clientWidth <= 991) {
    var articlesSwiper = new Swiper('.articles__tabs.swiper-container', {
      speed: 400,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoHeight: true,
      breakpoints: {
        991: {
          slidesPerView: 4,
          loop: false
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          loopFillGroupWithBlank: true,
          loop: true
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          loopFillGroupWithBlank: true,
          loop: true
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loopFillGroupWithBlank: true,
          loop: true
        }
      }
    });
  } else if (articlesSlide.length > 4 && document.documentElement.clientWidth > 991) {
    var articlesSwiper = new Swiper('.articles__tabs.swiper-container', {
      speed: 400,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoHeight: true,
      breakpoints: {
        991: {
          slidesPerView: 4,
          loop: false
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          loopFillGroupWithBlank: true,
          loop: true
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          loopFillGroupWithBlank: true,
          loop: true
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loopFillGroupWithBlank: true,
          loop: true
        }
      }
    });
  }

  // About Us Swiper
  const aboutusSlide = document.querySelectorAll('.aboutus-slider.swiper-container .swiper-slide');
  if (document.documentElement.clientWidth > 991) {
    var aboutusSwiper = new Swiper('.aboutus-slider.swiper-container', {
      allowTouchMove: false,
      spaceBetween: 15,
      slidesPerView: 4
    });
  } else {
    var aboutusSwiper = new Swiper('.aboutus-slider.swiper-container', {
      speed: 400,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        991: {
          slidesPerView: 4,
          loop: false
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          loopFillGroupWithBlank: true,
          loop: true
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          loopFillGroupWithBlank: true,
          loop: true
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loopFillGroupWithBlank: true,
          loop: true
        }
      }
    });
  }

  // Tabs
  class Tabs {
    constructor(button, content) {
      this.button = button;
      this.content = content;
    }

    render() {
      const showTabs = (el) => {
        const btnTarget = el.currentTarget;
        const country = btnTarget.dataset.country;
        this.content.forEach((el) => {
          this.removeClass(el);
        });
        this.button.forEach((el) => {
          this.removeClass(el);
        });
        document.querySelector('#' + country).classList.add('active');
        btnTarget.classList.add('active');
      }
      
      this.button.forEach(function(el) {
        el.addEventListener("click", showTabs);
      });
    }

    removeClass(el) {
      el.classList.remove('active');
    }

  }
  const offersTabLinks = document.querySelectorAll('.offers-tabs-link'),
        offersTabContent = document.querySelectorAll('.offers-tabs-content');
  const offersTabs = new Tabs(offersTabLinks, offersTabContent);
  offersTabs.render();

  const articlesTabLinks = document.querySelectorAll('.articles-tabs-link'),
        articlesTabContent = document.querySelectorAll('.articles-tabs-content');
  const articlesTabs = new Tabs(articlesTabLinks, articlesTabContent);
  articlesTabs.render();

  // Range
  var rangeSliderValueElementSum = document.getElementById('slider-range-value--sum');
  var rangeSliderSum = document.getElementById('slider-range--sum');

  noUiSlider.create(rangeSliderSum, {
      start: [0, 100000],
      step: 1000,
      connect: true,
      range: {
          'min': [0],
          'max': [400000]
      }
  });
  rangeSliderSum.noUiSlider.on('update', function (values, handle) {
      rangeSliderValueElementSum.innerHTML = values[handle];
  });

  var rangeSliderValueElementTerm = document.getElementById('slider-range-value--term');
  var rangeSliderTerm = document.getElementById('slider-range--term');

  noUiSlider.create(rangeSliderTerm, {
      start: [0, 20],
      connect: true,
      step: 1,
      range: {
          'min': [0],
          'max': [48]
      }
  });
  rangeSliderTerm.noUiSlider.on('update', function (values, handle) {
      rangeSliderValueElementTerm.innerHTML = values[handle];
  });

  const noUiOriginSum = document.querySelector('.range-item--sum .noUi-origin').style.display = 'none';
  const noUiOriginTerm = document.querySelector('.range-item--term .noUi-origin').style.display = 'none';

  // Menu 
  const header = document.querySelector('.header'),
        burgerMenu = document.querySelector('.burger-menu');

  burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    header.classList.toggle('active');
    document.body.classList.toggle('hidden');
  });

});