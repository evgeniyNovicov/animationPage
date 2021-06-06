$(document).ready(function () {
    $('.slider-image').slick({
        fade: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 900,
        infinite: true

    })

    $('.step2__list').slick({
        fade: false,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        autoplaySpeed: 1500,
        speed: 900,
        infinite: false,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })
})

let progressBar = document.querySelector('.progreess-bar')
let servicesListWrap = document.querySelector('.services__list_wrap')
let servicesList = document.querySelector('.services__list')
let body = document.querySelector('body')
let menuOpenBtn = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu_wrap')
let background = document.querySelector('.background--black')
let closeMenuBtn = document.querySelector('.button--close')

menuOpenBtn.addEventListener('click', function () {
    background.classList.toggle('active')
    menu.classList.toggle('active')
})

background.addEventListener('click', function () {
    background.classList.toggle('active')
    menu.classList.toggle('active')
})

closeMenuBtn.addEventListener('click', function () {
    background.classList.toggle('active')
    menu.classList.toggle('active')
})

const arrayLink = document.querySelectorAll('.menu-item__link')
if (arrayLink.length > 0) {
    arrayLink.forEach(link => {
        link.addEventListener('click', function (e) {
            background.classList.toggle('active')
            menu.classList.toggle('active')
            const menuLink = e.target
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const block = document.querySelector(menuLink.dataset.goto)
                const gotoBlockValue = block.getBoundingClientRect().top + pageYOffset
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                })
                e.preventDefault()
            }
        })
    })
}

let complex = document.querySelector('.complex')
let step3 = document.querySelector('.step3')
let imageStep1 = document.querySelector('.slider-image_wrap')
let blockStep1 = document.querySelector('.step1-block')
let blockStep3 = document.querySelector('.step3-block')
let imageStep3 = document.querySelector('.step3__image_wrap');

servicesList.addEventListener('wheel', function (e) {
    if (servicesList.scrollLeft < 430) {
        e.preventDefault()
        servicesList.scrollLeft += e.deltaY;
        let progressWidth = servicesList.scrollLeft / 4
        console.log(progressWidth)
        progressBar.style.width = progressWidth + '%'
    }
})

const animItems = document.querySelectorAll('._anim-items')
if (animItems.length > 0) {
    window.addEventListener('scroll', elemHide)
    function elemHide() {
        for (let ind = 0; ind < animItems.length; ind++) {
            const animItem = animItems[ind];
            const animItemHeight = animItem.offsetHeight  // получаем высоту элемента
            const animItemOffset = offset(animItem).top   // получаем положение элемента относительно всей высоты сайта
            const animStart = 4  // коэфициент 1/4 от размера элемента
            let animItemPoint = window.innerHeight - animItemHeight / animStart  // точка при которой элемент выходит на 1/4 снизу экрана
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart  // если высота элемента больше высоты окна браузера
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { 
                // когда проскролленное расстояние больше чем точка верхней границы элемента минус 
                // расстояние от верха окна браузера до точки когда 1/4 элемента появляется над экраном
                // и  проскролленное расстояние меньше чем точка верхней границы элемента плюс высота элемента
                if(animItem.classList.contains('header-box__item')) {
                    let headerElments = document.querySelectorAll('.header-box__item')
                    headerElments.forEach((elem, ind) => {
                        if(ind == 0) {
                            elem.classList.add('_active')
                        }
                        if(ind == 1) {
                            setTimeout(function() {
                                elem.classList.add('_active')
                            },400)
                        }
                        if(ind == 2) {
                            setTimeout(function() {
                                elem.classList.add('_active')
                            },800)
                        }
                    }) 
                } else{
                    animItem.classList.add('_active')
                }
            } else {
                if (!animItem.classList.contains('_stop')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(elemHide(), 500)
}
