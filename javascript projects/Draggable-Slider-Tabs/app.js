let slider = document.querySelector(".slider-tabs");
let scrollRightBtn = document.getElementById("scroll-right-btn");
let scrollLeftBtn = document.getElementById("scroll-left-btn");
let container = document.querySelector(".container");
let chips = document.querySelectorAll("li.tab");
slider.scrollLeft = 0;
scrollLeftBtn.style.display = "none";
scrollRightBtn.style.display = "flex";

chips.forEach((chip) => {
	chip.onclick = function (event) {
		chips.forEach((chip) => {
			chip.classList.remove("active");
		});
		let target = event.target;
		target.classList.add("active");
	};
});

scrollRightBtn.addEventListener("click", (_) => {
	let a = slider.scrollWidth;
	let b = slider.clientWidth;
	slider.scrollLeft += 250;
	if (slider.scrollLeft == a - b) {
		scrollRightBtn.style.display = "none";
	} else {
		scrollRightBtn.style.display = "flex";
	}
	scrollLeftBtn.style.display = "flex";
});

scrollLeftBtn.addEventListener("click", (_) => {
	let a = slider.scrollWidth;
	let b = slider.clientWidth;

	slider.scrollLeft -= 250;
	if (slider.scrollLeft == 0) {
		scrollLeftBtn.style.display = "none";
	} else {
		scrollLeftBtn.style.display = "flex";
	}
	scrollRightBtn.style.display = "flex";
});
let isDragging = false,
	prevTouch,
	prevScroll;

const dragStart = (e) => {
	isDragging = true;
	prevTouch = e.pageX;
	prevScroll = slider.scrollLeft;
	// console.log(prevScroll);
	console.log(prevTouch);
};

const dragging = (e) => {
	if (!isDragging) return;
	slider.classList.add("dragging");
	let a = slider.scrollWidth;
	let b = slider.clientWidth;
	// dynamic prevtouch where the user touch the slider with his mouse.
	// e.pageX is consetitnty chaning so this code a slider effect.
	// maintain the prevscroll so it does not go back to the start ay adding the prevscroll to the current view.
	slider.scrollLeft = prevTouch - e.pageX + prevScroll;
	if (slider.scrollLeft == 0) {
		scrollLeftBtn.style.display = "none";
	} else {
		scrollLeftBtn.style.display = "flex";
	}
	scrollRightBtn.style.display = "flex";

	if (slider.scrollLeft == a - b) {
		scrollRightBtn.style.display = "none";
	} else {
		scrollRightBtn.style.display = "flex";
	}
};

const stopDragging = () => {
	isDragging = false;
	slider.classList.remove("dragging");
};

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", stopDragging);
