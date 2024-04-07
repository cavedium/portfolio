const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const socialNet = document.querySelector(".social-net-list")

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	socialNet.classList.toggle("active")
})