const language = ["html", "css", "JavaScript", "php", "swift", "java"];
const needed_language = 3;

console.log(" مرحبا بك في برنامج توظيف المبرمجون");

let name = promot("ما اسمك");
let age = parseInt(prompt("كم عمرك "));
let experience = parseInt(prompt("كم عدد سنوات الخبرة"));

console.log("لغات البرمجة:");

for (let i = 1; i <= languages.length; i++) {
  console.log(i + " " + languages[i - 1]);
}

let skill1 = prompt("اختر اللغة");
let skill2 = prompt("اختر لغة اخرى");

if (
  age > 25 &&
  age < 44 &&
  experience > 3 &&
  (skill1 = needed_language || skill2 == needed_language)
) {
  console.log("مقبول");
} else {
  console.log("مرفوض");
}

function looger(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
  }
}

function toCel(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    result_array.push(parseInt((temperatures[i] - 32) * (5 / 9)));
  }
  return result_array;
}

function hottestDays(temperatures, min_value) {
  for (let i = 0; i < temperatures.length; i++) {
    hot.push(temperatures[i]);
  }
  return hot;
}

let feh_temp_array = [32, 70, 99, 106];
let threshold = 70;
let hot = [];
let result_array = [];

function logHottestDays(input_array, min_value) {
  logger(tocel(hottestDays(input_array, min_value)));
}

logHottestDays(feh_temp_arry, threshold);
// -----------3---------------//
function sumValues() {
  let num1, num2, res;
  num1 = Number(document.formcalc.txtnum1.value);
  num2 = Number(document.formcalc.txtnum2.value);
  res = num1 + num2;
  document.formcalc.txtres.value = res;
}
