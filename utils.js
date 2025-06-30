export function myFunction() {
    if (document.documentElement.scrollTop > 200) {
      document.querySelector("header").className = "scrolled";
    } else {
      document.querySelector("header").className = "header";
    }
  }

export function fadeIn(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }else{
          entry.target.classList.remove('show')
        }
    })
  })
  return observer;
}

export function copyLink(className){
  const funcFadeIn = document.querySelector(`.${className}`).addEventListener('click', async () => {
    let textToCopy = '';
    if (className ==='email'){
      textToCopy = 'n.ebrahiminoor@gmail.com';  
    }else if(className==='telegram'){
      textToCopy = '@niush_eh';
    }else{
      console.error('wrong class name.')
    }
    try {
        await navigator.clipboard.writeText(textToCopy);
        alert("link copied to clipboard")
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
  });
  return funcFadeIn()
}