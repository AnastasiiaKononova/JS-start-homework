let a = 5;
let b = 3;
console.log(a * b);

let c = 35;
let d = 22;
console.log(c / d);

let e = 95;
let f = 54;
console.log(e + f);

console.log(typeof 11);
console.log(typeof true);
console.log(typeof "java script");
console.log(typeof "100");

let num = 1;
num += 11;
console.log(num);
num -= 11;
console.log(num);
num *= 11;
console.log(num);
num /= 11;
console.log(num);
num ++;
console.log(num);
num --;
console.log(num);

let number = prompt("Введите число:");
let squaredNumber = number ** 2;
alert(squaredNumber);

let number1 = +prompt("Введите первое число:");
let number2 = +prompt("Введите второе число:");
let average = (number1 + number2) / 2;
alert(average);

let minutes = prompt("Введите количество минут:");
let sec = minutes * 60;
alert(sec);

let greeting = "Hello, ";
let userName = prompt("Введите Ваше имя:");
alert(greeting + userName + "!");
