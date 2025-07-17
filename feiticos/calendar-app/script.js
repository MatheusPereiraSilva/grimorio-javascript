const month = document.querySelector(".month-name");
const dayWeek = document.querySelector(".day-name");
const dayNumber = document.querySelector(".day-number");
const year = document.querySelector(".year");
const currentDate = new Date();

month.innerText = currentDate.toLocaleString("en", { month: "long" });
dayWeek.innerText = currentDate.toLocaleString("en", { weekday: "long" });
dayNumber.innerHTML = currentDate.getDate();
year.innerText = currentDate.getFullYear();
