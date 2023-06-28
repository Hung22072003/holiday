// js Show Modal Search
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const btnSearchs=$$('.js-header-search')
const modal=$('.js-modal')
const modalOverlay=$('.js-modal-inner')
const modalClose=$('.js-modal-close')

function showModalsearch() {
    modal.classList.add('open')
}

function hideModalsearch() {
    modal.classList.remove('open')
}

btnSearchs.forEach(function(search) {
    search.addEventListener('click',showModalsearch)
})
modalClose.addEventListener('click',hideModalsearch)
modal.addEventListener('click',hideModalsearch)
modalOverlay.addEventListener('click', function(event) {
    event.stopPropagation(modalOverlay)
})

// javascript modal-menu

const menu = $('.modal-menu')
const btnMenus = $$('.js-search-menu')
const closeMenu = $('.modal-menu__close')
const bodyHide = $('body')

btnMenus.forEach(function(btnMenu) {
    btnMenu.onclick = function(e) {
        menu.classList.add('open')
        e.stopPropagation()
    }
})

menu.onclick = function(e) {
    e.stopPropagation()
}

bodyHide.onclick = function() {
    menu.classList.remove('open')
    modalAttraction.classList.remove('modal-active')
}

closeMenu.onclick = function() {
    menu.classList.remove('open')
}

// javascript ấn hiện video

const play = $('.container__video-link')
const modalVideo = $('.modal-video')
const video = $('.video')

play.onclick = function() {
    if (screen.width >= 740) {
        modalVideo.classList.add('open')
    }
}


modalVideo.onclick = function() {
    modalVideo.classList.remove('open')
}

video.onclick = function(e) {
    e.stopPropagation()
}


// Javavscript slide layout
const btnSlideRight = $('.btn-slide__right')
const btnSlideLeft = $('.btn-slide__left')
const layouts = $$('.layout-background')
var i = 0
layouts[i].classList.add('selected')
function slideBackgroundRight() {
    layouts[i].classList.remove('selected')
    i++
    if(i >= layouts.length) i = 0
    layouts[i].classList.add('selected')
}
function slideBackgroundLeft() {
    layouts[i].classList.remove('selected')
    i--
    if(i < 0) i = layouts.length - 1
    layouts[i].classList.add('selected')
}

btnSlideLeft.onclick = function() {
    slideBackgroundLeft()
}
btnSlideRight.onclick = function() {
    slideBackgroundRight()
}
setInterval(function() {
    slideBackgroundRight()
},5000)


// javascript ẩn hiện modal attraction

var modalAttraction = $('.modal-attraction')
var btnRelated = $('.btn-related')
var btnPurchase = $('.btn-purchase')
btnRelated.onclick = function(e) {
    modalAttraction.classList.toggle('modal-active')
    e.stopPropagation()
    btnRelated.classList.remove('left')
    btnPurchase.classList.remove('left')
}

modalAttraction.onclick = function(e) {
    e.stopPropagation()
}


const headerSlide = $('.header-slide')
const slideTop = $('.slide-top')

window.onscroll = function(e) {    
    // lướt lên đầu trang
    if (document.documentElement.scrollTop > 920) {
        slideTop.classList.add('on')
    } else {
        slideTop.classList.remove('on')
    }

    slideTop.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        slideTop.classList.remove('on')
    }

    if( modalAttraction.matches('.modal-active')) {
        if (document.documentElement.scrollTop  > 950) {
            modalAttraction.classList.toggle('modal-active')
        }
    }

    if (document.documentElement.scrollTop > 1050) {
        btnRelated.classList.add('left')
        btnPurchase.classList.add('left')
    }


    // hiện header khi lướt xuống
    if(document.documentElement.scrollTop > 1000 && screen.width > 1024) {
        headerSlide.classList.add('header-appear')
    } else {
        headerSlide.classList.remove('header-appear')
    }

    // hiện số tự động tăng dần
    
    if (document.documentElement.scrollTop > 3200) {
        animateNumber(452, 2500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            $('#tourist').innerText = formattedNumber
        })
        
        animateNumber(120, 2500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            $('#year').innerText = formattedNumber
        })
        
        animateNumber(283, 2300, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            $('#cottage').innerText = formattedNumber
        })
    
        animateNumber(197, 3000, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            $('#restaurant').innerText = formattedNumber
        })
    }
}


// hiệu ứng số tăng dần bằng javascript
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
} 

// ẩn hiện box chat 

const btnBoxChat = $('.btn-chatting') 
const boxChat = $('.box-chat')
const closeBoxs = $$('.box-heading__icon')

btnBoxChat.onclick = function(e) {
    btnBoxChat.style.opacity = 0
    btnBoxChat.style.bottom = -10 + 'px'
    btnBoxChat.style.animation = 'slideOff 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
    boxChat.style.display = 'flex'
    boxChat.style.animation = 'showBox 0.6s ease-in'
    e.stopPropagation()
}

closeBoxs.forEach(function(closeBox) {
    closeBox.onclick=function(e) {
        boxChat.classList.remove('open')
        btnBoxChat.style.bottom = 15 + 'px'
        btnBoxChat.style.opacity = 1
        btnBoxChat.style.animation = 'fadeIn 0.4s ease-in'
        boxChat.style.display = 'none'
        boxChat.style.animation = 'hideBox 0.5s ease-in'
        e.stopPropagation()
    }
})

var sliderItems = $$('.slider-item')
var btnDot = $('.btn-dot')
var j=0;


const btnMenuMobile = $('.header-menu-mobile-tablet')
const navbarMobile = $('.navbar-mobile-tablet')

btnMenuMobile.onclick = function(e) {
    navbarMobile.classList.toggle('open')
}

const headingList = $$('.navbar-mobile-tablet__tittle')

headingList.forEach(function(headingItem) {
    headingItem.onclick = function(e) {
        e.target.classList.toggle('navbar-mobile-tablet__tittle--active')
        e.target.childNodes[3].classList.toggle('turn')

        var i;
        for(i=0;i<headingList.length;i++) {
            if(headingList[i].nextElementSibling.classList.contains('open') && headingList[i] != headingItem) {
                headingList[i].nextElementSibling.classList.remove('open')
                headingList[i].childNodes[3].classList.remove('turn')
                headingList[i].classList.remove('navbar-mobile-tablet__tittle--active')
            }
        }
        e.target.nextElementSibling.classList.toggle('open')
        if (e.target.nextElementSibling.classList.contains('open')) {
            e.target.closest('.navbar-mobile-tablet').classList.add('height')
        } else {
            e.target.closest('.navbar-mobile-tablet').classList.remove('height')
        }
    }
})

const btnOpenLogin = $('.open-form-login')
const btnOpenRegister = $('.open-form-register')
const formLogin = $('.form-login')
const formRegister = $('.form-register')

btnOpenLogin.onclick = function(e) {
    formRegister.classList.remove('open')
    formLogin.classList.add('open')
    btnOpenRegister.classList.remove('form-options__item--active')
    e.target.classList.add('form-options__item--active')
}

btnOpenRegister.onclick = function(e) {
    formLogin.classList.remove('open')
    formRegister.classList.add('open')
    btnOpenLogin.classList.remove('form-options__item--active')
    e.target.classList.add('form-options__item--active')
}