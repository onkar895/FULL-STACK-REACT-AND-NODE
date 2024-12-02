const hamberger = document.querySelector('.nav-toggler')
const navMenu = document.querySelector('.nav')

const makeCross = () => {
  hamberger.classList.toggle('active')
  navMenu.classList.toggle('open')

  if (navMenu.classList.contains('open')) {
    navMenu.style.maxHeight = navMenu.scrollHeight + 'px'
  } else {
    navMenu.removeAttribute('style')
  }
}
 
hamberger.addEventListener('click', makeCross)
