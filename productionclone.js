function hover() {
  document.getElementsByClassName("hide-infor");
}

document.querySelector(".orange").onmouseover = () =>
  (document.querySelector(".dropdown-menu").style.display = "block");
document.querySelector(".orange").onmouseout = () =>
  (document.querySelector(".dropdown-menu").style.display = "none");
document.querySelector(".dropdown-menu").onmouseout = () =>
  (document.querySelector(".dropdown-menu").style.display = "none");
document.querySelector(".dropdown-menu").onmouseover = () =>
  (document.querySelector(".dropdown-menu").style.display = "block");

let conto = document.querySelector(".conto");
let despo = document.querySelector(".despo");
let count = 0;
conto.addEventListener("click", () => {
  if (count == 0) {
    despo.classList.add("descriptionopen");
    count = 1;
  } else {
    despo.classList.remove("descriptionopen");
    count = 0;
  }
});

let contt = document.querySelector(".contt");
let despt = document.querySelector(".despt");
contt.addEventListener("click", () => {
  if (count == 0) {
    despt.classList.add("descriptionopen");
    count = 1;
  } else {
    despt.classList.remove("descriptionopen");
    count = 0;
  }
});


let conttr = document.querySelector(".conttr");
let desptr = document.querySelector(".desptr");
conttr.addEventListener("click", () => {
  if (count == 0) {
    desptr.style.padding="1rem"
    desptr.style.height = "2rem";
    count = 1;
  } else {    
    desptr.style.padding = "0rem";
    desptr.style.height = "0rem";
    count = 0;
  }
});
