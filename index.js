function calculateAge(dobString) {
  // Expecting dobString in "dd-mm-yyyy"
  let [year, month, day] = dobString.split("-").map(Number);
  let dob = new Date(year, month - 1, day); // month is 0-based in JS
  let today = new Date();
  console.log(today);

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Adjust days and months if needed
  if (days < 0) {
    months -= 1;
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

let input = document.querySelector('input');
let button = document.querySelector('button');


let dob;
let age;

input.addEventListener('change', () => {
    dob = input.value;
});

button.addEventListener('click', () =>{
    age = calculateAge(dob);

    let yearsP1 = document.querySelector('.yearsP1');
    let monthsP1 = document.querySelector('.monthsP1');
    let daysP1 = document.querySelector('.daysP1');

    yearsP1.innerHTML = age.years;
    monthsP1.innerHTML = age.months;
    daysP1.innerHTML = age.days;
})