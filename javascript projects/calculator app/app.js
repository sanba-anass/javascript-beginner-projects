let btn7 = document.querySelector('[value="7"]');
let btn8 = document.querySelector('[value="8"]');
let btn9 = document.querySelector('[value="9"]');
let btn4 = document.querySelector('[value="4"]');
let btn5 = document.querySelector('[value="5"]');
let btn6 = document.querySelector('[value="6"]');
let btn3 = document.querySelector('[value="3"]');
let btn2 = document.querySelector('[value="2"]');
let btn1 = document.querySelector('[value="1"]');
let btn0 = document.querySelector('[value="0"]');
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector(".result");
let deleteBtn = document.querySelector(".del-btn");
let multBtn = document.querySelector(".mult-btn");
let divBtn = document.querySelector(".div-btn");
let equalBtn = document.querySelector(".equal-btn");
let addBtn = document.querySelector(".add-btn");
let minusBtn = document.querySelector(".minus-btn");
let resultScreen = document.querySelector(".result-screen");
let period = document.querySelector(".period");
let toggleBtn = document.querySelector(".toggle-btn");
let calcBtns = document.querySelector(".calc-buttons");
let logo = document.querySelector(".logo");
let thumb = toggleBtn.children[0];
//let button = document.querySelector('button')
const btns = [
	btn0,
	btn1,
	btn2,
	btn3,
	btn4,
	btn5,
	btn6,
	btn7,
	btn8,
	btn9,
	multBtn,
	divBtn,
	minusBtn,
	addBtn,
	period,
];
toggleBtn.addEventListener("click", (e) => {
	if (thumb.classList.contains("animate-x")) {
		thumb.classList.remove("animate-x");
		document.body.style.backgroundColor = "#3a4764";
		resultScreen.style.backgroundColor = "#182034";
		calcBtns.style.backgroundColor = "#182034";
		toggleBtn.style.backgroundColor = "#182034";
		btns.forEach((btn) => {
			btn.style.color = "#182034";
			btn.style.backgroundColor = "#eae3dc";
			btn.style.borderColor = "#b4a597";
		});
		logo.style.color = "#fff";
		result.style.color = "#fff";
		deleteBtn.style.backgroundColor = "#637097";
		resetBtn.style.backgroundColor = "#637097";
		deleteBtn.style.borderColor = "#637097";
		resetBtn.style.borderColor = "#637097";
		equalBtn.style.backgroundColor = "#d03f2f";
		equalBtn.style.borderColor = "#93261a";
		thumb.style.backgroundColor ="#d03f2f"
	} else {
		thumb.classList.add("animate-x");
		document.body.style.backgroundColor = "#160628";
		resultScreen.style.backgroundColor = "#1d0934";
		calcBtns.style.backgroundColor = "#1d0934";
		toggleBtn.style.backgroundColor = "#1d0934";
        
		btns.forEach((btn) => {
			btn.style.color = "#FFFF4C";
			btn.style.backgroundColor = "#341c4f";
			btn.style.borderColor = "#871c9c";
		});
		logo.style.color = "#FFFF4C";
		result.style.color = "#FFFF4C";
		deleteBtn.style.backgroundColor = "#58077d";
		resetBtn.style.backgroundColor = "#58077d";
		deleteBtn.style.borderColor = "#bc15f4";
		resetBtn.style.borderColor = "#bc15f4";
		equalBtn.style.backgroundColor = "#00e0d1";
		equalBtn.style.borderColor = "#6cf9f2";
		thumb.style.backgroundColor ="#00e0d1"
	}
});

// thumb.addEventListener("click", (e) => {
// 	this?.classList?.add("animate-x");
// });
function UpdateResult(...btns) {
	for (const btn of btns) {
		btn.onclick = function (e) {
			const targetBtn = e.target;
			if (result.textContent == "0" && targetBtn.textContent === "0") {
				return;
			}
			result.textContent += targetBtn.textContent;
			if (result.textContent[2] == ".") {
				result.textContent = result.textContent.replace(/^0+/, "");
			}
		};
	}
}
function keyClicked(btn) {
	btn.classList.add("active");
	btn.click();
	let id = setTimeout(() => {
		btn.classList.remove("active");
		clearTimeout(id);
	}, 100);
}
deleteBtn.addEventListener("click", (_) => {
	if (result.textContent.length === 1) {
		result.textContent = "0";
		return;
	}
	result.textContent = result.textContent.slice(
		0,
		result.textContent.length - 1
	);
});

window.addEventListener("keydown", (e) => {
	if (e.key == "9") {
		keyClicked(btn9);
	}
	if (e.key == "8") {
		keyClicked(btn8);
	}
	if (e.key == "7") {
		keyClicked(btn7);
	}
	if (e.key == "6") {
		keyClicked(btn6);
	}
	if (e.key == "5") {
		keyClicked(btn5);
	}
	if (e.key == "4") {
		keyClicked(btn4);
	}
	if (e.key == "3") {
		keyClicked(btn3);
	}
	if (e.key == "2") {
		keyClicked(btn2);
	}
	if (e.key == "1") {
		keyClicked(btn1);
	}
	if (e.key == "r") {
		console.log("sone");
		keyClicked(resetBtn);
	}
	if (e.key == "d") {
		keyClicked(deleteBtn);
	}
	if (e.key == "+") {
		keyClicked(addBtn);
	}
	if (e.key == "-") {
		keyClicked(minusBtn);
	}
	if (e.key == "/") {
		keyClicked(divBtn);
	}
	if (e.key == "*") {
		keyClicked(multBtn);
	}
	if (e.key == ".") {
		keyClicked(period);
	}
	if (e.key == "Enter") {
		keyClicked(equalBtn);
	}
});

resetBtn.addEventListener("click", (_) => {
	result.textContent = "0";
});
equalBtn.addEventListener("click", (_) => {
	try {
		result.textContent = eval(result.textContent.trim());
		if (result.textContent.toString() === "NaN") {
			let message = "Result is undefined";
			result.textContent = "0";
			alert(message);
		}
	} catch (e) {
		console.log(e);
		let message = "invalid Expression";
		alert(message);
	}
});

UpdateResult(...btns);
function isNumeric(str) {
	if (typeof str != "string") return false; // we only process strings!
	return (
		!isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		!isNaN(parseFloat(str))
	); // ...and ensure strings of whitespace fail
}
