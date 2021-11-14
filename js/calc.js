// 1 шаг - Выводим информацию пользователю
// 2 шаг - получаем от пользователя первое число
// 3 шаг - получаем операцию
//4 шаг - получаем второе число
// 5 шаг - получаем результат


function info() {
    alert("Сложение, вычетание, умножение, деление")
}
function getFirstNumber(){
    let firstNumber=prompt("Введи первое число");
    return Number(firstNumber);
}
function operation (){
    let thirdStep=prompt("Что нужно сделать с первым числом");
    return thirdStep;
}
function secondNumber2 (){
    let sec=prompt("Введи второе число");
    return Number(sec);
}
function fiveStep(operation,numberArray){
    if(operation==="+"){
        let result=numberArray[0]+numberArray[1];
        console.log(result);
    }else if(operation==="-"){
       let result=numberArray[0]-numberArray[1];
console.log(result);
    }
    else if(operation==="*"){
    let result=numberArray[0]*numberArray[1];
    console.log(result);
    }
    else if(operation==="/"){
        let result=numberArray[0]/numberArray[1];
        console.log(result);
    }else(operation==="+,-,*,/"){
    console.log("Введено недопустимое выражение")
    }
    
}
info();
let firstNumber1=getFirstNumber();
let oper= operation();
let num1= secondNumber2();
let numberArray=[firstNumber1,num1];
fiveStep(oper,numberArray);
