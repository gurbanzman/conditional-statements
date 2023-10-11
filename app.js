//Exercise-1
// for(let i = 1; i <= 100; i++){
//    if(i % 2 == 0){
//       console.log(i + " is Even number");
//    }
//    else{
//       console.log(i + " is a Odd number");
//    }
// }

//Exercise-2

// let num1 = prompt("write...");
// let num2 = prompt("write...");

// if(num1 > num2){
//    console.log(num1 + " is the largest");
// }
// else{
//    console.log(num2 + " is the largest");
// }

//Exercise-3

// let a = [6,2,4];
// a.sort((a,b) => a - b);
// console.log(a);

//Exercise-4

// let month = prompt("write some numbers...");
// if(Number(month) > 1 && Number(month) < 12){
//    if(Number(month) == 4 || Number(month) == 6 || Number(month) == 9 || Number(month) == 11){
//       alert("30 days");
//    }
//    if(Number(month) == 2){
//       if(confirm("is it leap year?")){
//          alert("28 days");
//       }
//       else{
//          alert("29 days");
//       }
//    }
//    else{
//       alert("31 days");
//    }
// }
// else{
//    alert("invalid month");
// }

//Exercise-5

// let n = prompt("write some grades...");

// if(n > 90 && n < 100){
//    alert("S grade");
// }if(n > 80 && n < 90){
//    alert("A grade");
// }
// if(n > 70 && n < 80){
//    alert("B grade");
// }
// if(n > 60 && n < 70){
//    alert("C grade");
// }
// if(n > 50 && n < 60){
//    alert("D grade");
// }
// if(n > 40 && n < 50){
//    alert("E grade");
// }
// else{
//    alert("Invalid marks");
// }

//Exercise-6

// let year = prompt("write year...");

// if(year % 4 == 0 || year % 100 >= 0 || year % 400 == 0){
//    alert(`"Year ${year} is a leap year"`);
// }
// else{
//    alert(`"Year ${year} is not a leap year"`);
// }

//Exercise-7

// let number1=prompt("Enter the first number");
// let number2=prompt("Enter the second number");
// let op=prompt("Operation");

// if(op=="add" || op=="subtract" || op=="multiply" || op=="divide" || op=="modulus"){
// if(op=="add"){
//     alert(Number(number1) + Number(number2));
// }
// if(op=="subtract"){
//     alert(Number(number1) - Number(number2));
// }
// if(op=="multiply"){
//     alert(Number(number1) * Number(number2));
// }
// if(op=="divide"){
//     alert(Number(number1) / Number(number2));
// }
// if(op=="modulus"){
//     alert(Number(number1) % Number(number2));
// }
// }
// else{
//     alert("Invalid operation");
// }

//Exercise-8

// let a = prompt("side1...");
// let b = prompt("side2...");
// let c = prompt("side3...");

// if(a == b && b == c && a == c){
//    alert("Equilateral triangle.");
// }
// if(a - b == 0 || a - c == 0 || b - c == 0){
//    alert("Isosceles triangle.");
// }
// if(a < b + c && a > Math.abs(b - c) || b < a + c && b > Math.abs(a - c) || c < a + b && c > Math.abs(a - b)){
//    alert("Scalene triangle.");
// }