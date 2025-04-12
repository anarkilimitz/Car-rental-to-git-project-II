"use strict";

ScrollReveal().reveal("section", {
	delay: 200, // Задержка перед появлением секции
	distance: "100px", // Расстояние, с которого элемент появляется
	origin: "bottom", // Направление появления
	interval: 200, // Интервал между появлением элементов
});

ScrollReveal().reveal(
	".title, .promo__text, .present__text, .map__address, .scrolling-container, .btn",
	{
		delay: 200, // Задержка перед началом анимации
		distance: "30px", // Расстояние, с которого элемент появляется
		origin: "bottom", // Направление появления (bottom, top, left, right)
		duration: 1000, // Продолжительность анимации (в миллисекундах)
		easing: "ease-in-out", // Плавное ускорение и замедление
		interval: 200, // Интервал между появлением элементов
		opacity: 0, // Начальная прозрачность
		scale: 0.9, // Начальный масштаб (для эффекта "увеличения")
		reset: true, // Анимация повторяется при каждой прокрутке
	}
);
// ------------ Video ----------------------
const video = document.getElementById("promoVideo");
// Устанавливаем скорость воспроизведения (0.5 = 50% скорости)
video.playbackRate = 0.8;
