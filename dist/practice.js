"use strict";
const message = 'hello world ts';
console.log(message);
let count = 0;
count += 1;
// count = 'messages '; (error 발생)
const done = false;
const numbers = [1, 2, 3];
const messages = ['hello', 'world'];
// messages.push(1); (error 발생)
let mightBeUndefined = 'string for undefined';
let nullableNumber = null;
let color = 'red';
color = 'yellow';
// color='green'; (error 발생)
// 함수 연습
function sum(x, y) {
    return x + y;
}
const result = sum(1, 2);
console.log('result: ', result);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const totalSum = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(totalSum);
