const menuList = document.querySelector(".menu-list");
const burger = document.querySelector(".button-burger");

burger.addEventListener("click", (e) => {
	burger.classList.toggle("active");
	menuList.classList.toggle("active");
});