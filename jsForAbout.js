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

let buttons =document.querySelectorAll(".a-contact")
buttons.forEach(button =>{
  let onceTel =0;
  let onceGit =0;
  let onceMail=0;
  let msg = 'click to copy'
  button.addEventListener("mouseover",(element)=>{
    if (element.target.id ==='tel' & onceTel!==1){
      const container = document.getElementById('tel');
      const newP = document.createElement("p");
      newP.textContent = msg;
      newP.classList = 'contact-p';
      newP.id ='tel';
      container.appendChild(newP) ;
      onceTel++;
    }else if(element.target.id ==='mail' & onceMail!==1){
      const container = document.getElementById('mail');
      const newP = document.createElement("p");
      newP.textContent = msg;
      newP.classList = 'contact-p';
      newP.id ='mail';
      container.appendChild(newP) ;
      onceMail++;
    }else if(element.target.id ==='github' & onceGit!==1){
      const container = document.getElementById('github');
      const newP = document.createElement("p");
      newP.textContent = msg;
      newP.classList = 'contact-p';
      newP.id ='github';
      container.appendChild(newP) ;
      onceGit++;
    }
  })
  button.addEventListener("mouseleave",(element)=>{
    let elements =document.querySelectorAll('.contact-p')
    elements.forEach(element=>{
      element.classList.add('hide');
      if (element.parentElement.id==='tel'){
        onceTel=0;
        element.remove();
      }else if(element.parentElement.id==='mail'){
        onceMail=0;
        element.remove();
      }else if(element.parentElement.id==='github'){
        onceGit=0;
        element.remove();
      }
    })
    once = 0;
  })
})
