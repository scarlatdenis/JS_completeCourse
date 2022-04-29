const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log("Mark`s BMI is = " + BMIMark);
console.log("John`s BMI is = " + BMIJohn);

if (BMIJohn > BMIMark) {
  console.log("John have a biggest BMI!");
} else {
  console.log("Mark`s BMI is biger!");
}
