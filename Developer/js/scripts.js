const language = ["html", "css", "JavaScript", "php","swift","java"];
const needed_language = 3;

console.log(" مرحبا بك في برنامج توظيف المبرمجون")


let name = promot("ما اسمك")
let age = parseInt (prompt("كم عمرك "))
let experience = parseInt (prompt("كم عدد سنوات الخبرة"))

console.log("لغات البرمجة:")

for ( let i = 1; i <= languages.length; i++) {
    console.log( i + " " + languages[ i-1 ]);
}

let skill1 = prompt("اختر اللغة")
let skill2 = prompt ("اختر لغة اخرى")

  if (
age> 25 && age <44 &&
experience > 3&&
( skill1 = needed_language || skill2 = needed_language)
  ) {
      console.log("مقبول");
  } else {
      console.log("مرفوض");
  }

function looger(temperatures) {
for ( let i = 0; i < temperatures.length; i++){
    console.log(temperatures[i]);
}
}

function toCel( temperatures){
    for ( let i = 0; i < temperatures.length; i++) {
     result_array.push(parseInt((temperatures[i]-32)*(5 / 9)));

    }
return result_array;
}

function