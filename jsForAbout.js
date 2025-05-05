import { myFunction } from './utils.js';
window.onscroll = function() { myFunction(); };


const circle = document.querySelector('.circle-progress');
const radius = circle.r.baseVal.value;
console.log(radius)
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = `${circumference}`; 

let current = 0;
const target = 75; 


function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    document.getElementById('percentage').textContent = `${percent}%`;
}

const interval = setInterval(() => {
    if (current <= target) {
      setProgress(current);
      current += 1;
    } else {
      clearInterval(interval);
    }
}, 20);