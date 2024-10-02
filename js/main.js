const navigationList = document.querySelector(".navigation-list");
const navigationLink = document.querySelectorAll(".navigation-link");
const headerContentImg = document.querySelector(".header-content__img");

const burger = document.querySelector(".navigation-burger-button");

navigationLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    navigationLink.forEach((item) => {
      item.classList.remove("active-link");
    });
    e.target.classList.add("active-link");
  });
});

burger.addEventListener("click", () => {
  burger.classList.toggle("active-burger");
});
