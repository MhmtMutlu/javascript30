const navDOM = document.querySelector("#main");
const topOfNav = navDOM.offsetTop;

function fixedNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${navDOM.offsetHeight}px`;
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixedNav);