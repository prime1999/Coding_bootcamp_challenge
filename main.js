//Declaring constants
const control = document.querySelector(".slider-control");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const tanya = document.querySelector(".tanya-text");
const john = document.querySelector(".john-text");

function slide(e) {
  if (e.target.classList.contains("right")) {
    s2.style.marginLeft = "-50%";
    tanya.style.marginLeft = "-50%";
  } else if (e.target.classList.contains("left")) {
    s2.style.marginLeft = "0%";
    tanya.style.marginLeft = "0%";
  }
}

control.addEventListener("click", slide);
