// css
import gsap from 'gsap';
import '../../css/home.css';

// utils
import Foundation from '../utils/Foundation';
import Ease from '../utils/Ease';
Foundation();

document.addEventListener('DOMContentLoaded', () => {
	const $track1 = document.querySelector('.js-track-1');
	if ($track1) {
		const col = 8;
		const row = 17;

		for (let r = 1; r <= row; r++) {
			for (let c = 1; c <= col; c++) {
				if (r % 2 === 1 && c === 1) {
					const $div = document.createElement('div');
					$div.classList.add('p-track__square', 'js-track-square1');
					$div.style.gridRow = r;
					$div.style.gridColumn = 1;
					$track1.appendChild($div);
				}

				if (r % 2 === 1 && c % 2 === 1) {
					const $div = document.createElement('div');
					$div.classList.add('p-track__square', 'js-track-square1');
					$div.style.gridRow = r;
					$div.style.gridColumn = c + 2;
					$track1.appendChild($div);
				} else if (r % 2 === 0 && c % 2 === 0) {
					const $div = document.createElement('div');
					$div.classList.add('p-track__square', 'js-track-square1');
					$div.style.gridRow = r;
					$div.style.gridColumn = c;
					$track1.appendChild($div);
				}
			}
		}
	}

	const $track2 = document.querySelector('.js-track-2');
	if ($track2) {
		const col = 3;
		const row = 17;

		for (let r = 1; r <= row; r++) {
			for (let c = 1; c <= col; c++) {
				if (r % 2 === 1 && c % 2 === 0) {
					const $div = document.createElement('div');
					$div.classList.add('p-track__square', 'js-track-square2');
					$div.style.gridRow = r;
					$div.style.gridColumn = c;
					$track2.appendChild($div);
				} else if (r % 2 === 0 && c % 2 === 1) {
					const $div = document.createElement('div');
					$div.classList.add('p-track__square', 'js-track-square2');
					$div.style.gridRow = r;
					$div.style.gridColumn = c;
					$track2.appendChild($div);
				}
			}
		}
	}
});

window.addEventListener('load', () => {
	const $wrapper = document.querySelector('.js-wrapper');
	const $$trackSquare1 = document.querySelectorAll('.js-track-square1');
	const $$trackSquare2 = document.querySelectorAll('.js-track-square2');
	const $arrow1 = document.querySelector('.js-arrow-1');
	const $arrow2 = document.querySelector('.js-arrow-2');
	const $$textWebItem = document.querySelectorAll('.js-text-web-item');
	const $$textTrainingItem = document.querySelectorAll(
		'.js-text-training-item'
	);
	const $textGraphicItem = document.querySelector('.js-text-graphic-item');
	const $textIndexItem = document.querySelector('.js-text-index-item');
	const $figureBoxTop = document.querySelector('.js-figure-box-top');
	const $figureBoxRight = document.querySelector('.js-figure-box-right');
	const $figureBoxBottom = document.querySelector('.js-figure-box-bottom');
	const $figureBoxLeft = document.querySelector('.js-figure-box-left');
	const $figureCircle = document.querySelector('.js-figure-circle');
	const $figureStar = document.querySelector('.js-figure-star');

	gsap.set($arrow1, {
		x: () => {
			const documentWidth = document.documentElement.clientWidth;
			const left = $arrow1.getBoundingClientRect().left;
			const right = documentWidth - $arrow1.getBoundingClientRect().right;
			return right - left;
		},
		rotate: -90,
	});

	gsap.set($arrow2, {
		x: () => {
			const documentWidth = document.documentElement.clientWidth;
			const left = $arrow2.getBoundingClientRect().left;
			const right = documentWidth - $arrow2.getBoundingClientRect().right;
			return right - left;
		},
		rotate: 90,
	});

	gsap.set($$trackSquare1, {
		x: () => {
			const randomX = gsap.utils.random(-5, 5, 1);
			return randomX;
		},
		opacity: 0,
	});

	gsap.set($$trackSquare2, {
		x: () => {
			const randomX = gsap.utils.random(-5, 5, 1);
			return randomX;
		},
		opacity: 0,
	});

	gsap.set($$textWebItem, {
		y: (i) => {
			const $item = $$textWebItem[i];
			const itemHeight = $item.getBoundingClientRect().height;

			return -itemHeight * i;
		},
		opacity: 0,
	});

	gsap.set($$textTrainingItem, {
		y: (i) => {
			const $item = $$textTrainingItem[i];
			const itemHeight = $item.getBoundingClientRect().height;

			return -itemHeight * i;
		},
		opacity: 0,
	});

	gsap.set($textGraphicItem, {
		xPercent: 50,
		skewX: -15,
		opacity: 0,
	});

	gsap.set($textIndexItem, {
		xPercent: 50,
		skewX: -15,
		opacity: 0,
	});

	gsap.set($figureBoxTop, {
		scaleX: 0,
		transformOrigin: 'left',
	});

	gsap.set($figureBoxRight, {
		scaleY: 0,
		transformOrigin: 'top',
	});

	gsap.set($figureBoxBottom, {
		scaleX: 0,
		transformOrigin: 'right',
	});

	gsap.set($figureBoxLeft, {
		scaleY: 0,
		transformOrigin: 'bottom',
	});

	gsap.set($figureCircle, {
		strokeDasharray: () => {
			const path = $figureCircle.querySelector('path');
			const length = path.getTotalLength();

			return length;
		},
		strokeDashoffset: () => {
			const path = $figureCircle.querySelector('path');
			const length = path.getTotalLength();

			return length;
		},
	});

	gsap.set($figureStar, {
		opacity: 0,
	});

	gsap.set($wrapper, {
		opacity: 1,
	});

	const opening = gsap.timeline({
		onComplete: () => {
			setTimeout(() => {
				loopAnimation();
			}, 600);
		},
	});

	opening.to($arrow1, {
		x: 0,
		rotate: 360,
		duration: 0.6,
		ease: Ease.DoubleSineOut,
		delay: 0.4,
	});

	opening.to(
		$arrow2,
		{
			x: 0,
			rotate: 540,
			duration: 0.6,
			ease: Ease.DoubleSineOut,
		},
		'<'
	);

	opening.to($$trackSquare1, {
		x: 0,
		opacity: 1,
		duration: 0.4,
		ease: Ease.DoubleSineOut,
		stagger: {
			each: 0.004,
			from: 'random',
		},
	});

	opening.to(
		$$trackSquare2,
		{
			x: 0,
			opacity: 1,
			duration: 0.4,
			ease: Ease.DoubleSineOut,
			stagger: {
				each: 0.012,
				from: 'random',
			},
		},
		'<'
	);

	opening.to(
		$$textWebItem,
		{
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: Ease.gleasing,
			stagger: 0.012,
		},
		'-=0.6'
	);

	opening.to($textGraphicItem, {
		xPercent: 0,
		skewX: 0,
		opacity: 1,
		duration: 0.6,
		ease: Ease.gleasing,
	});

	opening.to(
		$textIndexItem,
		{
			xPercent: 0,
			skewX: 0,
			opacity: 1,
			duration: 0.6,
			ease: Ease.gleasing,
		},
		'<'
	);

	opening.to(
		$$textTrainingItem,
		{
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: Ease.gleasing,
			stagger: 0.012,
		},
		'-=0.4'
	);

	opening.to($figureBoxTop, {
		scaleX: 1,
		duration: 0.6,
		ease: Ease.ExpoMix,
	});

	opening.to(
		$figureBoxRight,
		{
			scaleY: 1,
			duration: 0.6,
			ease: Ease.ExpoMix,
		},
		'<'
	);

	opening.to(
		$figureBoxBottom,
		{
			scaleX: 1,
			duration: 0.6,
			ease: Ease.ExpoMix,
		},
		'<'
	);

	opening.to(
		$figureBoxLeft,
		{
			scaleY: 1,
			duration: 0.6,
			ease: Ease.ExpoMix,
		},
		'<'
	);

	opening.to(
		$figureCircle,
		{
			strokeDashoffset: 0,
			rotate: 0,
			duration: 1,
			ease: Ease.ExpoMix,
		},
		'-=0.4'
	);

	opening.to($figureStar, {
		opacity: 1,
		duration: 0.4,
		ease: Ease.gleasing,
	});

	function loopAnimation() {
		const keyframes = {
			0: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			10: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			20: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			30: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			40: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			50: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			60: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			70: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			80: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			90: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
			100: {
				x: () => {
					const randomX = gsap.utils.random(-5, 5, 1);
					return randomX;
				},
				y: () => {
					const randomY = gsap.utils.random(-5, 5, 1);
					return randomY;
				},
			},
		};

		// ループアニメーション
		gsap.to($$textWebItem, {
			keyframes: keyframes,
			duration: 2,
			ease: 'steps(10)',
			repeat: -1,
		});

		gsap.to($$textTrainingItem, {
			keyframes: keyframes,
			duration: 2,
			ease: 'steps(10)',
			repeat: -1,
		});

		gsap.to($textGraphicItem, {
			keyframes: keyframes,
			duration: 2,
			ease: 'steps(10)',
			repeat: -1,
		});

		gsap.to($textIndexItem, {
			keyframes: keyframes,
			duration: 2,
			ease: 'steps(10)',
			repeat: -1,
		});

		gsap.to(
			[$arrow1, $arrow2, '.js-track-1', '.js-track-2', '.js-figure'],
			{
				keyframes: keyframes,
				duration: 1,
				ease: 'steps(10)',
				repeat: -1,
			}
		);
	}
});
