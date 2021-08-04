const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100; // 100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(20, 20, 20, 0.6),
    ${xWalk * -1}px ${yWalk}px 0 rgba(22, 22, 22, 0.2),
    ${yWalk}px ${xWalk * -1}px 0 rgba(15, 15, 15, 0.3),
    ${yWalk * -1}px ${xWalk}px 0 rgba(23, 23, 23, 0.2)
  `;
};

hero.addEventListener("mousemove", shadow);
