/* ---------------------------Rotate background--------------------------- */

const bg = document.querySelector("#background2");

const body = document.querySelector("#body");

const windowWidth = window.innerWidth / 2;
const windowHeight = window.innerHeight / 2;

body.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0) rotate(-${mouseX}deg)`;
});

/* ---------------------------Show/Hide Menu--------------------------- */

const navMenu = document.getElementById("MobileMenu");
const navChange = document.getElementById("hamb");

if (navChange) {
  navChange.addEventListener("click", () => {
    if (navMenu.classList.contains("show")) {
      // Menu Off
      navMenu.classList.remove("show");
    } else {
      // Menu On
      navMenu.classList.add("show");
    }
  });
}
