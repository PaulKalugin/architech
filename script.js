
let header = document.querySelector('.main-header');
let activeBg = document.querySelector('.active-background');
let btnBg = document.querySelector('.section-1_btn');
let showModal = document.querySelector('.section-1-modal');
let closeModal = document.querySelectorAll('.form__button-close');
let showsec2ModalCount = document.querySelector('.button-1');
let showsec2ModalCallBack = document.querySelector('.button-2');
let sec2CountModal = document.querySelector('.section-2__form-count-modal');
let sec2CallModal = document.querySelector('.section-2__form-call-modal');
let burgerBtn = document.querySelector('.menu-burger-wrapper');
let burgerStrings = document.querySelector('.menu-burger-string');
let mainMenu = document.querySelector('.main-header__menu__list');

window.addEventListener("scroll", function() {
	let scroll = window.scrollY;
	if (scroll > 0) {
		header.classList.add('active');
		mainMenu.classList.add('translate');
	} else {
		header.classList.remove('active');
		mainMenu.classList.remove('translate');
	}
})

burgerBtn.onclick = function() {
	burgerBtn.classList.toggle("active");
	mainMenu.classList.toggle("active");
}

showsec2ModalCount.onclick = function() {
	sec2CountModal.classList.toggle("active");
	activeBg.classList.toggle('active');
}

btnBg.onclick = function() {
	activeBg.classList.toggle('active');
	showModal.classList.toggle('active');
}

for (let i = 0; i < closeModal.length; i++) {
	closeModal[i].onclick = function() {
	activeBg.classList.remove('active');
	showModal.classList.remove('active');
	sec2CountModal.classList.remove('active');
	sec2CallModal.classList.remove('active');
	}
}

showsec2ModalCallBack.onclick = function() {
	sec2CallModal.classList.toggle('active');
	activeBg.classList.toggle('active');
}

//slider

let sliderItems = document.querySelectorAll('.item-sliders');
let sliderNextBtn = document.querySelector('.slider_btn');

let count = 0;

sliderNextBtn.onclick = function() {
	count++;
	if (count <= sliderItems.length - 1) {
		sliderItems[count].classList.add('visible');
		sliderItems[count - 1].classList.remove('visible');
	} else {
		count = 0;
		sliderItems[count].classList.add("visible");
		sliderItems[sliderItems.length - 1].classList.remove("visible");
	}
}
