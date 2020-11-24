const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 150) {
		header.style.backgroundColor = 'rgba(21, 25, 30, 0.95)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var lang = 'en';
var userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substring(0, 2);
if (userLang === 'es') {
	lang = userLang;
}
var elementsVisibles;
var elementsNotVisible;
if (lang === 'es') {
	elementsVisible = document.getElementsByClassName('es');
	elementsNotVisible = document.getElementsByClassName('en');
} else {
	elementsVisible = document.getElementsByClassName('en');
	elementsNotVisible = document.getElementsByClassName('es');
}
if (elementsVisible && elementsNotVisible) {
	for (var i = 0; i < elementsVisible.length; i++) {
		elementsVisible[i].classList.remove('invisible');
		elementsVisible[i].classList.add('visible');
	}
	for (var j = 0; j < elementsVisible.length; j++) {
		elementsNotVisible[j].classList.add('invisible');
		elementsVisible[j].classList.remove('visible');
	}
}

function goReferenceGuide() {
	window.location="https://github.com/jorgekautz/reference-guide";
}