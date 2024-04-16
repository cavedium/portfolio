const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

if (document.documentElement.clientWidth < 768) {
	var swiper = new Swiper(".mySwiper", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});
}