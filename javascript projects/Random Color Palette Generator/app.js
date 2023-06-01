let gridColors = document.querySelectorAll(
	".grid-colors .grid-item .box-color"
);
let gridItems = document.querySelectorAll(".grid-colors .grid-item");
let colorCode = document.querySelectorAll(".color-code");

let refreshBtn = document.querySelector(".refresh-btn");
function rgbToHex(number) {
	return number.toString(16);
}
function generateRandomColors(_) {
	for (let i = 0; i < gridColors.length; i++) {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		gridColors[i].style.background = `rgb(${r},${g},${b})`;
		gridColors[i].nextElementSibling.innerHTML = `<div>#${rgbToHex(
			r
		)}${rgbToHex(g)}${rgbToHex(b)}</div>`;
		gridItems[i].onclick = function (_) {
			let copyText = gridItems[i].children[1].innerText;
			navigator.clipboard
				.writeText(copyText.toUpperCase())
				.then(() => {
					gridItems[i].children[1].innerText = "copied";
					setTimeout(
						() => (gridItems[i].children[1].innerText = copyText),
						1000
					);
				})
				.catch(() => alert("Failed to copy color code!"));
		};
	}
}
generateRandomColors();
refreshBtn.addEventListener("click", generateRandomColors);

// const num = 60;
// const hex = num.toString(16);
// console.log(hex); // 3c

// // Use parentheses when calling toString() directly
// const hex2 = (60).toString(16);
// console.log(hex2); // 3c
