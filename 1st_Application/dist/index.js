"use strict";
console.log("Hello world");
//Data Types
//Numbers
let age = 22;
//String
let firstName = 'Kamal';
//Array
let numbersArray; //any -ඔනම type එකක්
let numberArray = [10, 20, 30, 40, "50"];
/**
let numberArray2: number[] = [10,20,30,40,"50"]//number එකේ string value තින නිසා error "50"
let nameArray: string[] = [10,20,30,40,"50"]//number එකේ string value තින නිසා error "10,20,30,40"
*/
//Tuples
let person = [1, "Kamal"]; //Data type 2k එක පාරට දානවනම් use කරන්නේ
//functions without defined a return type
function calculator() {
    let numbers = [];
    return numbers;
}
//function with defined return type
function calculatorAverage(subjectCount, totalMarks) {
    let average = (totalMarks / subjectCount) * 100;
    return average;
}
let avgMarks = calculatorAverage(5, 420);
console.log(avgMarks);
//function with optional parameters
function addNumber(firstNumber, secondNumber) {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }
    return firstNumber;
}
console.log(addNumber(10));
