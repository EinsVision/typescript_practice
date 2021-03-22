const message: string = 'hello world ts';
console.log(message);

let count = 0;
count += 1;

// count = 'messages '; (error 발생)

const done: boolean = false;

const numbers: number[] = [1,2,3];
const messages: string[] = ['hello', 'world'];

// messages.push(1); (error 발생)

let mightBeUndefined: string | undefined = 'string for undefined';
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color='yellow';
// color='green'; (error 발생)

// 함수 연습
function sum(x: number, y: number): number {
  return x+y;
}

const result = sum(1, 2);
console.log('result: ', result);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc+current, 0);
}

const totalSum = sumArray([1,2,3,4,5,6,7,8,9,10]);
console.log(totalSum);

function returnNoting() {
  console.log('return Noting');
}

returnNoting();
