import { myFunction } from './utils.js';
window.onscroll = function() { myFunction(); };


// starting the animation for tools section
function toolsAnimationFadeIn(number){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`circle-${number}`);
      }else{
        entry.target.classList.remove(`circle-${number}`)
      }
  })
  })
  return observer
}

const elements = document.querySelectorAll(".circle")
elements.forEach((el,index)=>{
  let observer = toolsAnimationFadeIn(index+1)
  observer.observe(el)
})