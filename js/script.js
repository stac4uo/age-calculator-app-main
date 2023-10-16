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

let newYear = () => {
	const inputYear = document.querySelector("#inputYear");

	let input = inputYear.value;

	if (isNaN(input) || input === "" || input <= 0) {
		errorMsg3.classList.remove("hidden");
		yearsText.classList.replace("text-SmokeyGrey", "text-LightRed");
		inputYear.classList.replace("border-LightGrey", "border-LightRed");
		years.innerHTML = "--";
	} else if (input > 2024) {
		errorMsg3.classList.remove("hidden");
		yearsText.classList.replace("text-SmokeyGrey", "text-LightRed");
		inputYear.classList.replace("border-LightGrey", "border-LightRed");
		years.innerHTML = "--";
		errorMsg3.innerHTML = "Must by in the past"
		return;
	} else {
		errorMsg3.classList.add("hidden");
		yearsText.classList.replace("text-LightRed", "text-SmokeyGrey");
		inputYear.classList.replace("border-LightRed", "border-LightGrey");

		let some = date.getFullYear() - input;
		years.innerHTML = `${some}`;
	}
};

const newMonths = () => {
	const inputMonth = document.querySelector("#inputMonth");
	const input = inputMonth.value;
	if (isNaN(input) || input === "" || input <= 0) {
		errorMsg2.classList.remove("hidden");
		monthText.classList.replace("text-SmokeyGrey", "text-LightRed");
		inputMonth.classList.replace("border-LightGrey", "border-LightRed");
		months.innerHTML = "--";
	} else if (input > 12) {
		errorMsg2.classList.remove("hidden");
		monthText.classList.replace("text-SmokeyGrey", "text-LightRed");
		inputMonth.classList.replace("border-LightGrey", "border-LightRed");
		months.innerHTML = "--";
		errorMsg2.innerHTML = "Must be a valid month";
	} else {
		months.innerHTML = `${"12" - inputMonth.value}`;
		errorMsg2.classList.add("hidden");
		monthText.classList.replace("text-LightRed", "text-SmokeyGrey");
		inputMonth.classList.replace("border-LightRed", "border-LightGrey");
	}
};

const newDays = () => {
	const inputDay = document.querySelector("#inputDay");
	const input = inputDay.value;

	if (isNaN(input) || input === "" || input <= 0) {
		errorMsg1.classList.remove("hidden");
		dayText.classList.replace("text-SmokeyGrey", "text-LightRed");
		inputDay.classList.replace("border-LightGrey", "border-LightRed");

		days.innerHTML = "--";
	} else if (input > 31) {
		errorMsg1.classList.remove("hidden");
		dayText.classList.replace("text-SmokeyGrey", "text-LightRed");
		inputDay.classList.replace("border-LightGrey", "border-LightRed");
		errorMsg1.innerHTML = "Must be a valid ";
		days.innerHTML = "--";
	} else {
		days.innerHTML = `${"31" - inputDay.value}`;
		errorMsg1.classList.add("hidden");
		dayText.classList.replace("text-LightRed", "text-SmokeyGrey");
		inputDay.classList.replace("border-LightRed", "border-LightGrey");
	}
};

button.addEventListener("click", newYear);
button.addEventListener("click", newMonths);
button.addEventListener("click", newDays);
// console.log(`${date.getFullYear()}`);
// console.log(`${date.getMonth() + 1}`);
// console.log(`${date.getDate()}`);
