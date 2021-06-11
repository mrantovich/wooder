const burgerMenu = document.querySelector('.header__burger');
burgerMenu.addEventListener('click', addActive);
const headerBox = document.querySelector('.header');
const wholeBody = document.querySelector('body');
const wholeHTML = document.querySelector('html');

function addActive() {
	this.classList.toggle('_active');
	headerBox.classList.toggle('_active');
	wholeBody.classList.toggle('_lock');
	wholeHTML.classList.toggle('_lock');
};

const sliderDotsArray = document.querySelectorAll('.main__slider-vertical-dots-item');
for (i = 0; i < sliderDotsArray.length; i++) {
	sliderDotsArray[i].addEventListener('click', doSliderDotClick);
};
const sliderBGDictionary = {
	'slider-dot-01': ['0', '01', 0],
	'slider-dot-02': ['-100vw', '02', 1],
	'slider-dot-03': ['-200vw', '03', 2],
	'slider-dot-04': ['-300vw', '04', 3],
};

const mainBGContainer = document.querySelector('.main__bg-container');
const sliderVNumber = document.querySelector('.main__slider-vertical-number');

let curSlider = 1;
const maxSlider = 3;
function autoSlider() {
	sliderDotsArray[curSlider].click();
	curSlider++;
	if (curSlider > maxSlider) {
		curSlider = 0;
	};
};

function doSliderDotClick() {
	for (i = 0; i < sliderDotsArray.length; i++) {
		sliderDotsArray[i].classList.remove('main__slider-vertical-dots-item_current');
	};
	this.classList.add('main__slider-vertical-dots-item_current');
	var keyToSlider = this.id;
	mainBGContainer.style.left = sliderBGDictionary[keyToSlider][0];
	sliderVNumber.innerHTML = sliderBGDictionary[keyToSlider][1];

	curSlider = sliderBGDictionary[keyToSlider][2];
	console.log(curSlider);
};

window.setInterval(autoSlider, 5000);