'use strict';

import { initForm } from './app.js';
import { initPhoneMask } from './mask.js';

initForm();
initPhoneMask();

// Для анимации
ScrollReveal().reveal('section', {
	delay: 200, // Задержка перед появлением секции
	distance: '100px', // Расстояние, с которого элемент появляется
	origin: 'bottom', // Направление появления
	interval: 200, // Интервал между появлением элементов
});

ScrollReveal().reveal(
	'.title, .promo__text, .present__text, .map__address, .scrolling-container, .btn',
	{
		delay: 200, // Задержка перед началом анимации
		distance: '30px', // Расстояние, с которого элемент появляется
		origin: 'bottom', // Направление появления (bottom, top, left, right)
		duration: 1000, // Продолжительность анимации (в миллисекундах)
		easing: 'ease-in-out',
		interval: 200, // Интервал между появлением элементов
		opacity: 0, // Начальная прозрачность
		scale: 0.9, // Начальный масштаб (для эффекта "увеличения")
		reset: false, // Анимация повторяется при каждой прокрутке
	}
);
// ------------ Video ----------------------
const video = document.getElementById('promoVideo');
// Устанавливаем скорость воспроизведения (0.5 = 50% скорости)
video.playbackRate = 0.8;

// Открытие/закрытие формы

const openButtons = document.querySelectorAll('[data-action="open-form"]');
const formModal = document.querySelector('.container-form');
const closeBtn = document.querySelector('.close-form');

// --- scroll lock ---
function lockScroll() {
	document.body.style.overflow = 'hidden';
}

function unlockScroll() {
	document.body.style.overflow = '';
}

// --- открытие ---
openButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		formModal.classList.add('active');
		lockScroll();
	});
});

// --- закрытие (ЕДИНАЯ функция) ---
function closeModal() {
	formModal.classList.remove('active');
	unlockScroll();
}

// кнопка закрытия
closeBtn?.addEventListener('click', closeModal);

// клик вне формы
formModal.addEventListener('click', (e) => {
	if (e.target === formModal) closeModal();
});

// ESC
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && formModal.classList.contains('active')) {
		closeModal();
	}
});

// СВАЙПЕР
const beforeSwiper = new Swiper('.beforeSwiper', {
	slidesPerView: 1,
	spaceBetween: 10,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const afterSwiper = new Swiper('.afterSwiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	allowTouchMove: false, // чтобы не листали отдельно
	speed: 700, // плавность
});

// синхронизация
beforeSwiper.on('slideChange', () => {
	setTimeout(() => {
		afterSwiper.slideTo(beforeSwiper.activeIndex);
	}, 150); // задержку второму слайдеру сделал для красоты
});
