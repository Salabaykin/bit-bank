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
  if (articlesSlide.length > 4) {
    var articlesSwiper = new Swiper('.articles__tabs.swiper-container', {
      speed: 400,
      slidesPerView: 4,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoHeight: true,
    });
  } 

  // About Us Swiper
  const aboutusSlide = document.querySelectorAll('.aboutus-slider.swiper-container .swiper-slide');
  if (document.documentElement.clientWidth > 991) {
    var aboutusSwiper = new Swiper('.aboutus-slider.swiper-container', {
      allowTouchMove: false,
      slidesPerView: 4
    });
  } else {
    var aboutusSwiper = new Swiper('.aboutus-slider.swiper-container', {
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        991: {
          slidesPerView: 4
        },
        640: {
          slidesPerView: 3
        },
        480: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1
        }
      }
    });
  }

  // Accordion 
  var accordion = (function (element) {
    var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
      var element = undefined;
      elements.forEach(function (item) {
        if (item.classList.contains(className)) {
          element = item;
        }
      });
      return element;
    };
    return function () {
      var _mainElement = {}, // .accordion
        _items = {}, // .accordion-item
        _contents = {}; // .accordion-item-content 
      var _actionClick = function (e) {
        if (!e.target.classList.contains('accordion-item__header')) { // прекращаем выполнение функции если кликнули не по заголовку
          return;
        }
        e.preventDefault(); // отменям стандартное действие
        // получаем необходимые данные
        var header = e.target;
        var item = header.parentElement;
        item.classList.toggle('show');
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
      };

      return {
        init: function (element) {
          _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
          _items = _mainElement.querySelectorAll('.accordion-item');
          _setupListeners();
        }
      }
    }
  })();

  var group = accordion();
  // group.init('#accordion');

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