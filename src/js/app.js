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
  console.log(articlesSlide);
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

});