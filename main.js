//Mostrar e fecha menu quando clica no ícone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

//quando clicar em um item do menu, fecha menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

const header = document.querySelector("#header")
const navHeight = header.offsetHeight
//scroll da página gera sombra no header
function changeHeaderWhenScroll () {
  window.addEventListener('scroll' , function(){
    if(this.window.scrollY >= navHeight) {
      header.classList.add('scroll')
  } else {
      header.classList.remove('scroll')
  }
})
}

/* Testimonials swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
  keyboard: true,
  grabCursor: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar  elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700, 
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #contact .brand, #contact .social
`, { interval: 100})

const backToTopButton = document.querySelector('.back-to-top')
/* Back to top button */
function backToTop () {
  window.addEventListener('scroll', function(){
    if(window.scrollY >= 760) {
      backToTopButton.classList.add('show')
  } else {
      backToTopButton.classList.remove('show')
  }
})
}

/* Menu ativo conforme seção ativa na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})



