/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import Swiper from 'swiper';
import {
    isWebp,
    headerFixed,
    togglePopupWindows,
    addTouchClass,
    addLoadedClass,
    menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


document.querySelector('.js-menu-btn').onclick = function () {
    this.classList.toggle('actived');
    document.querySelector('body').classList.toggle('overflow');
    document.querySelector('.header__content').classList.toggle('show');
}

///

if (document.querySelector('.js-mc') != null) {
    document.querySelector('.js-mcLink').classList.add('active-link');
}

if (document.querySelector('.js-furniture') != null) {
    document.querySelector('.js-furnitureLink').classList.add('active-link');


    let thumb = document.querySelectorAll('.js-ltlPic');
    thumb.forEach(function (element) {
        element.onclick = showPic;
    })


    function showPic() {
        let data = this.getAttribute('data');
        let bigPic = document.querySelectorAll('.js-bigPic')
        bigPic.forEach(function (elem) {
            elem.classList.remove('active')
        });
        let thumb = document.querySelectorAll('.js-ltlPic');
        thumb.forEach(function (elem) {
            elem.classList.remove('visible')
        })
        document.querySelector(`.js-bigPic[data="${data}"]`).classList.add('active');
        document.querySelector(`.js-ltlPic[data="${data}"]`).classList.add('visible');

        let moveRight = document.querySelector('.js-Right');
        moveRight.onclick = function (event) {
            event.preventDefault();
            let data = Number(document.querySelector('.active').getAttribute('data'));

            let bigPic = document.querySelectorAll('.js-bigPic')
            bigPic.forEach(function (elem) {
                elem.classList.remove('active')
            });
            let thumb = document.querySelectorAll('.js-ltlPic');
            thumb.forEach(function (elem) {
                elem.classList.remove('visible')
            })

            data += 1;
            if (data > 8) {
                data = 1;
            }
            document.querySelector(`.js-bigPic[data="${data}"]`).classList.add('active');
            document.querySelector(`.js-ltlPic[data="${data}"]`).classList.add('visible');
        }

        let moveLeft = document.querySelector('.js-Left');
        moveLeft.onclick = function (event) {
            event.preventDefault();
            let data = Number(document.querySelector('.active').getAttribute('data'));

            let bigPic = document.querySelectorAll('.js-bigPic')
            bigPic.forEach(function (elem) {
                elem.classList.remove('active')
            });
            let thumb = document.querySelectorAll('.js-ltlPic');
            thumb.forEach(function (elem) {
                elem.classList.remove('visible')
            })

            data -= 1;
            if (data < 1) {
                data = 8;
            }
            document.querySelector(`.js-bigPic[data="${data}"]`).classList.add('active');
            document.querySelector(`.js-ltlPic[data="${data}"]`).classList.add('visible');
        }
    }



}

if (document.querySelector('.review__slider') != null) {
    new Swiper('.review__slider', {
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".review__slider"
        },

        // autoHeight: true,
        slidesPerView: 5,
        // centeredSlides: true,
        loop: true,

        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            998: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            }
        },
        spaceBetween: 15,
    });
}

if (document.querySelector('.massmedia__slider') != null) {
    new Swiper('.massmedia__slider', {
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".massmedia__slider"
        },

        // autoHeight: true,
        slidesPerView: 4,
        // centeredSlides: true,
        loop: true,

        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            998: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        },
        spaceBetween: 15,
    });
}






if (document.querySelector('.js-showModal') != null) {
    let closeModal = document.querySelector('.js-modalClose');
    closeModal.onclick = function () {
        document.querySelector('.modal').classList.remove('showModal')
        document.querySelector('.modal__content').classList.remove('showModal-content')
    }

    let closeModale = document.querySelector('.modal__bg');
    closeModale.onclick = function () {
        document.querySelector('.modal').classList.remove('showModal')
        document.querySelector('.modal__content').classList.remove('showModal-content')
    }


    let showModal = document.querySelector('.js-showModal');
    showModal.onclick = ShowModal;
    // let showModale = document.querySelector('.js-showModale');
    // showModale.onclick = console.log(111);
    function ShowModal(event) {
        event.preventDefault();
        document.querySelector('.modal').classList.add('showModal')
        document.querySelector('.modal__content').classList.add('showModal-content')
    }
}


if (document.querySelector('.js-aboutus') != null) {
    document.querySelector('.js-aboutusLink').classList.add('active-link');
}