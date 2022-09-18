function hover() {
  document.getElementsByClassName("hide-infor");
}

const content = document.querySelectorAll(".content");

content.forEach((item, index) => {
  let header = item.querySelector("header");

  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
    } else {
      description.style.Height = "0px";
    }
    console.log(description);
  });
});
