const burgerMenu = document.querySelector('.header__burger');
burgerMenu.addEventListener('click', addActive);
const headerBox = document.querySelector('.header');

function addActive() {
	this.classList.toggle('_active');
	headerBox.classList.toggle('_active');
};

const sliderDotsArray = document.querySelectorAll('.main__slider-vertical-dots-item');
for (i = 0; i < sliderDotsArray.length; i++) {
	sliderDotsArray[i].addEventListener('click', doSliderDotClick);
};
const sliderBGDictionary = {
	'slider-dot-01': ['0', '01'],
	'slider-dot-02': ['-100vw', '02'],
	'slider-dot-03': ['-200vw', '03'],
	'slider-dot-04': ['-300vw', '04'],
};

const mainBGContainer = document.querySelector('.main__bg-container');
const sliderVNumber = document.querySelector('.main__slider-vertical-number');

function doSliderDotClick() {
	for (i = 0; i < sliderDotsArray.length; i++) {
		sliderDotsArray[i].classList.remove('main__slider-vertical-dots-item_current');
	};
	this.classList.add('main__slider-vertical-dots-item_current');
	var keyToSlider = this.id;
	mainBGContainer.style.left = sliderBGDictionary[keyToSlider][0];
	sliderVNumber.innerHTML = sliderBGDictionary[keyToSlider][1];
};

let curSlider = 1;
const maxSlider = 3;
function autoSlider() {
	sliderDotsArray[curSlider].click();
	curSlider++;
	if (curSlider > maxSlider) {
		curSlider = 0;
	};
};

window.setInterval(autoSlider, 5000);