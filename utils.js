export function myFunction() {
    if (document.documentElement.scrollTop > 200) {
      document.querySelector("header").className = "scrolled";
    } else {
      document.querySelector("header").className = "header";
    }
  }
