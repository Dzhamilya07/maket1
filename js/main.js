let firstNumber =1;
let secondNumber =15;

let result =firstNumber + secondNumber;
console.log(result);

let fourNumber =4;
let tenNumber =20;

result =fourNumber/tenNumber;
console.log(result);

let first = 10;
let second = 5;

if (first > second) {
  console.log("Первое число больше, чем второе");
} else {
  console.log("Второе число больше первого");
}

let history =5;

for (let i=0; i < history; i++) {
  let cycle=i*5;
  if(cycle%2>0) {
    
    console.log(cycle+"число нечетное");
    

  } else {
    console.log(cycle+"число четное");
  }
}
function sum(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;

}
let x =sum(7,27)
console.log (x);

function Hello (name){
  return "Hello"+ name
  
}
let greait=Hello ("Сергей")
console.log(greait);