let listimg=document.querySelector('.listimg')
let img=listimg.querySelector('.imgitem')
let circle= document.querySelectorAll('.cricle')
let element=1
let a=setInterval(slider,3000)
let arrow = document.querySelectorAll('.arrowitem')
width = listimg.offsetWidth
function animatee(){
  if(element==0)
  {
     circle[3].classList.remove('animate')
  }
  else{
    circle[element-1].classList.remove('animate')
    }
}
function slider(){
  console.log(width)
  listimg.style.transform = `translateX(${width*-1*element}px)`;
  circle[element].classList.add('animate')
  animatee()
  element++
  if(element==4)
  {
    element=0
  }

}
circle[0].addEventListener('click',()=>{
    clearInterval(a)
    circle[element].classList.remove('animate')
    element=0
    circle[element].classList.add('animate')
    listimg.style.transform = `translateX(${width*-1*element}px)`;
    a=setInterval(slider,3000)
})
circle[1].addEventListener('click',()=>{
  clearInterval(a)
  circle[element].classList.remove('animate')
  element=1
  circle[element].classList.add('animate')
  listimg.style.transform = `translateX(${width*-1*element}px)`;
  a=setInterval(slider,3000)
})
circle[2].addEventListener('click',()=>{
  clearInterval(a)
  circle[element].classList.remove('animate')
  element=2
  circle[element].classList.add('animate')
  listimg.style.transform = `translateX(${width*-1*element}px)`;
  a=setInterval(slider,3000)
})
circle[3].addEventListener('click',()=>{
  clearInterval(a)
  circle[element].classList.remove('animate')
  element=3
  circle[element].classList.add('animate')
  listimg.style.transform = `translateX(${width*-1*element}px)`;
  a=setInterval(slider,3000)
})
arrow[0].addEventListener('click',()=>{
  clearInterval(a)
  circle[element].classList.remove('animate')
  if(element==0)
  {
    element=3
  }
  else{
  element--
  }
  circle[element].classList.add('animate')
  listimg.style.transform = `translateX(${width*-1*element}px)`;
  a=setInterval(slider,3000)
})
arrow[1].addEventListener('click',()=>{
  clearInterval(a)
  circle[element].classList.remove('animate')
  if(element==3)
  {
    element=0
  }
  else{
  element++
  }
  circle[element].classList.add('animate')
  listimg.style.transform = `translateX(${width*-1*element}px)`;
  a=setInterval(slider,3000)
})