const hamer = document.querySelector('.hamer')
const navba = document.querySelector('.navba')
const close = document.querySelector('.close-icon')
const header = document.querySelector('header')
hamer.addEventListener('click', (e) => {
  e.stopPropagation()
  hamer.style.visibility = 'hidden'
  close.classList.add('disp')
  navba.classList.add('space-x-0')
  header.classList.add('menu-open')
})

close.addEventListener('click', () => {
    hamer.style.visibility = 'visible'
  header.classList.remove('menu-open')
})

window.addEventListener('click', () => {
  header.classList.remove('menu-open')
})

navba.addEventListener('click', (e) =>
    {
        e.stopPropagation()
    } )
    
