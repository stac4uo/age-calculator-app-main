console.log("hej");
const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");

const button = document.querySelector("button");
const errorMsg1 = document.querySelector("#errorMsgEmpty1");
const errorMsg2 = document.querySelector("#errorMsgEmpty2");
const errorMsg3 = document.querySelector("#errorMsgEmpty3");
const yearsText = document.querySelector("#yearsText");
const monthText = document.querySelector("#monthText");
const dayText = document.querySelector("#dayText");
let date = new Date();

const showError = (msg, text, input, output) => {
	msg.classList.remove("hidden");
	text.classList.replace("text-SmokeyGrey", "text-LightRed");
	input.classList.replace("border-LightGrey", "border-LightRed");
	output.textContent = "--";
};
const hideError = (msg, text, input) => {
	msg.classList.add("hidden");
	text.classList.replace("text-LightRed", "text-SmokeyGrey");
	input.classList.replace("border-LightRed", "border-LightGrey");
};
let newYear = () => {
	const inputYear = document.querySelector("#inputYear");

	let input = inputYear.value;

	if (isNaN(input) || input === "" || input <= 0) {
		showError(errorMsg3, yearsText, inputYear, years);
	} else if (input > 2024) {
		showError(errorMsg3, yearsText, inputYear, years);
		errorMsg3.textContent = " Must by in the past";
	} else {
		hideError(errorMsg3, yearsText, inputYear);

		let some = date.getFullYear() - input;
		years.innerHTML = `${some}`;
	}
};

const newMonths = () => {
	const inputMonth = document.querySelector("#inputMonth");
	const input = inputMonth.value;
	if (isNaN(input) || input === "" || input <= 0) {
		showError(errorMsg2, monthText, inputMonth, months);
	} else if (input > 12) {
		showError(errorMsg2, monthText, inputMonth, months);
		errorMsg2.textContent = "Must be a valid month";
	} else {
		hideError(errorMsg2, monthText, inputMonth);
		months.innerHTML = `${"12" - inputMonth.value}`;
	}
};

const newDays = () => {
	const inputDay = document.querySelector("#inputDay");
	const input = inputDay.value;

	if (isNaN(input) || input === "" || input <= 0) {
		showError(errorMsg1, dayText, inputDay, days);
		errorMsg1.classList.remove("hidden");
		dayText.classList.replace("text-SmokeyGrey", "text-LightRed");
		inputDay.classList.replace("border-LightGrey", "border-LightRed");

		days.innerHTML = "--";
	} else if (input > 31) {
		showError(errorMsg1, dayText, inputDay, days);
		errorMsg1.textContent = "Must be a valid ";
	} else {
		hideError(errorMsg1, dayText, inputDay);
		days.innerHTML = `${"31" - inputDay.value}`;
	}
};
button.addEventListener("click", () => {
	newDays();
	newMonths();
	newYear();
});

