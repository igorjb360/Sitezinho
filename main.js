/*           abre e fecha o menu quando clicar no icone: menu e o X               */ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */ 
const  links = document.querySelectorAll('nav ul li a') 

for (const link of links) {
  link.addEventListener('click', function () {       
    nav.classList.remove('show')
  })
}

/*   ainda tenho que dar uma estudada    */ 

/* mudar o header da página quando der scroll */ 
function changeHeaderWhenScroll() {}
const header = document.querySelector('#header')
const navheight = header.offsetHeight

window.addEventListener('scroll', function() {
  if (window.scrollY >= navheight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

 /**testimonials sliper swiper */
 const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
     el: '.swiper-pagination'
   },
 mousewheel: true,
 keyboard: true,
 breakpoints: {
   767: {
     slidesPerView:2,
     setwrapperSize: true
   }
 }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
/* tenho que arrumar isso aqui ainda */     
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '1px',
  duration: 100,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu ativo conforme a sessão visivel na página */


/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})

