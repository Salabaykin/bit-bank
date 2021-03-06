document.addEventListener("DOMContentLoaded", function() {

  'use strict';

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

  // Quiz-Swiper
  function updSwiperNumericPaginationQuiz() {
    this.el.querySelectorAll( '.swiper-counter' ).forEach(el => {
      el.innerHTML = `<span class="count">${this.realIndex >= 9 ? '' : '0'}${this.realIndex + 1}</span>/<span class="total">${this.el.slidesQuantity > 10 ? '' : '0'}${this.el.slidesQuantity}</span>`;
    });
  }
  
  document.querySelectorAll( '.requirements-quiz.swiper-container' ).forEach( function( node ) {
    node.slidesQuantity = node.querySelectorAll( '.swiper-slide' ).length;
    new Swiper( node, {
      spaceBetween: 30,
      speed: 200,
      simulateTouch: false,
      on: { 
        init:        updSwiperNumericPaginationQuiz,
        slideChange: updSwiperNumericPaginationQuiz
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
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
      slidesPerView: 4,
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
      slidesPerView: 4,
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

  // Similar Offers Swiper
  if (document.documentElement.clientWidth > 1140) {
    var similarOffersSwiper = new Swiper('.similar-offers-slider.swiper-container', {
      allowTouchMove: false,
      spaceBetween: 20,
      slidesPerView: 4
    });
  } else {
    var similarOffersSwiper = new Swiper('.similar-offers-slider.swiper-container', {
      speed: 400,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        991: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1
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
  const numPay = document.querySelector('.calculator-info__item > span.num-pay'),
        numProc = document.querySelector('.calculator-info__item > span.num-proc'),
        numOverpayment = document.querySelector('.num-overpayment'),
        creditPercent = document.querySelector('.calculator-info__item--name').dataset.percent;

  let arr = {
    val1: 0,
    val2: 0,
    percent: creditPercent.trim() !== '' ? +creditPercent.replace(/,/, '.') : 15,
    pay: 0,
    overpayment: 0,
    getPercent() {
      const res = (this.val1 * this.percent) / 100;
      this.overpayment = parseFloat(res).toFixed(2);
      numOverpayment.textContent = `${this.overpayment} руб.`;
    },
    getPay() {
      let res;
      if (this.val2 > 0) {
        res = (this.val1 / this.val2) + (this.val1 * ((this.percent/100)/12));
      } else {
        res = this.val1 + this.overpayment;
      }
      this.pay = res;
      numPay.textContent = `${parseFloat(res).toFixed(2)} руб.`;
      this.getPercent();
    }
  };

  numProc.textContent = `${creditPercent.trim() !== '' ? creditPercent : 15} %`;

  const rangeSliderValueElementSum = document.querySelector('#slider-range-value--sum p');
  const maxLimit = document.querySelector('#slider-range-value--sum').dataset.limit;
  const rangeSliderSum = document.getElementById('slider-range--sum');
  
  if (rangeSliderSum) {
    let limit = maxLimit ? +maxLimit : 100000;
    noUiSlider.create(rangeSliderSum, {
      start: [1000, 1000],
      step: 1000,
      connect: true,
      range: {
          'min': [0],
          'max': [limit]
      },
      format: wNumb({
        decimals: 0
      }),
    });
    rangeSliderSum.noUiSlider.on('update', function (values, handle) {
      rangeSliderValueElementSum.innerHTML = values[handle];
      const res = values[1];
      arr.val1 = +res;
      arr.getPay();
    });
  }

  const rangeSliderValueElementTerm = document.querySelector('#slider-range-value--term p');
  const rangeSliderTerm = document.getElementById('slider-range--term');

  if (rangeSliderTerm) {
    noUiSlider.create(rangeSliderTerm, {
      start: [0, 12],
      connect: true,
      step: 1,
      range: {
          'min': [0],
          'max': [48]
      },
      format: wNumb({
        decimals: 0
      }),
    });
    rangeSliderTerm.noUiSlider.on('update', function (values, handle) {
        rangeSliderValueElementTerm.innerHTML = values[handle];
        const res = values[1];
        arr.val2 = +res;
        arr.getPay();
    });
  }

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

  // Accordion
  class Accordion {
    constructor(id, header) {
      this.header = header;
      this.id = id;
      this.render();
    }

    render() {
      function initAccordion(element, header) {
        const mainElement = document.querySelector(element);
        function actionClick(e) {
          if (!e.target.classList.contains(header)) {
            return;
          }
          e.preventDefault();
          const headerHead = e.target;
          const item = headerHead.parentElement;
          item.classList.toggle('show');
        };
        function setupListeners() {
          mainElement.addEventListener('click', actionClick);
        }
        if (mainElement) {
          setupListeners();
        }
      }
      initAccordion(this.id, this.header);
    }
  }

  const accordion = new Accordion('#accordion', 'accordion-item__header');

  // Link scroll
  const navLink = document.querySelectorAll('.detail-page__wrapper .nav .nav__ul a[href^="#"]'),
        navList = document.querySelectorAll('.detail-page__wrapper .nav__ul .nav__li');

  if (navLink.length > 0) {

    const elemUpdate = (event) => {
      const target = event.target;
      document.querySelector('.nav__li.active').classList.remove('active');
      target.closest('.nav__li').classList.add('active');
    };

    navList.forEach(item => {
      item.addEventListener('click', elemUpdate);
    });

    navLink.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
  
          let href = this.getAttribute('href').substring(1);
  
          const scrollTarget = document.getElementById(href);
  
          const topOffset = document.querySelector('.header').offsetHeight;
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset - 20;
  
          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
    });
  }

  // Modal 
  const popUp = () => {
    const modalContent = document.querySelector('.modal__content'),
          modalForm = modalContent.querySelector('.modal-form'),
          errorMessage = 'Что-то пошло не так',
          loadMessage = 'Идет отправка данных...',
          successMessage = 'Спасибо! Мы скоро с вами свяжемся',
          statusMessage = document.createElement('div');

    const modalData = {
      popupLink: document.querySelectorAll('[data-link-id]'),
      modal: document.querySelectorAll('.modal'),
      closeBtn(elem) {
        const closeBtn = elem.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
          this.closeModal(elem);
        });
        this.modal.forEach(elem => {
          elem.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__window')) {
              this.closeModal(elem);
            }
          });
        });
        
      },
      resetForm() {
        if (modalForm) {
          modalForm.reset();
        }
      },
      closeModal(elem) {
        elem.classList.remove('modal-open');
        if (modalForm) {
          modalForm.style = 'display: block';
          statusMessage.remove();
        }
        this.resetForm();
      },
      openModal(attr) {
        this.modal.forEach((elem) => {
          const elemAttr = elem.getAttribute('data-modal-id');
          if (attr === elemAttr) {
            elem.classList.add('modal-open');
            this.closeBtn(elem);
          }
        });
      },
    };

    modalData.popupLink.forEach(elem => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        const attrLinkValue = target.getAttribute('data-link-id');
        modalData.openModal(attrLinkValue);
      });
    });

    if (modalForm) {

      const modalSubmit = modalContent.querySelector('button.button'),
            checkboxPolicy = modalForm.querySelector('input[type=checkbox]');

      if (checkboxPolicy) {
        checkboxPolicy.addEventListener('change', () => {
          checkboxPolicy.checked ? modalSubmit.disabled = false : modalSubmit.disabled = true;
        });
      }

      modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        modalForm.style = 'display: none';
        modalContent.append(statusMessage);
        statusMessage.innerHTML = loadMessage;
        const formData = new FormData(modalForm);
        postData(formData)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('Status network not 200!');
            } 
            statusMessage.textContent = successMessage;
          })
          .catch((error) => {
            console.error(error);
            statusMessage.textContent = errorMessage;
          })
          .finally(() => modalData.resetForm());
      });
  
      const postData = (data) => {
        return fetch('../ajax/ajax_orders.php', {
            method: 'POST',
            cache: 'default',
            body: data,
            credentials: 'include'
        });
      };

    }

  };

  popUp();

});