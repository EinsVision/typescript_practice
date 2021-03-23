// 1. string 설정하는 방법
const message:string = 'hello typescript';
console.log(message);

// 2. number 설정하는 방법 
let count = 0; // let count:number = 0; 로 설정한 것과 같은 선언이다.
// count = 'hello' // 이렇게 문자열을 선언하면 error를 발생한다.

let count1:number = 1;

// 3. boolean 설정하는 방법
const done: boolean = false;

// 4. 배열을 설정하는 방법
const numbers: number[] = [1,2,3,4,5];

// 5. 문자열 배열을 설정하는 방법
const messages: string[] = ['hello', 'world'];

// 6. string or undefined 
let mightBeUndefined: string | undefined = undefined;
console.log(mightBeUndefined);

// 7. number or null
let nullOrNumber: number | null = null;
console.log(nullOrNumber);

// 8. let color를 한정 짓는 방법
let color: 'red' | 'orange' | 'blue';
color = 'red';

// 9. 함수 function ( return type도 number라고 지정해 줄 수 있다. )
function sum(x: number, y: number) : number{
  return x + y;
}

const result = sum(1,2);
console.log(result);

// 10. 함수 function ( array를 반환하는 함수를 만들어보자. )
function sumArray(numbers: number[]) : number{
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);
console.log(total);

// 11. 함수 function ( return type을 string이나 number로 하는 경우 )
function returnStringOrNumber() : string | number {
  return 'hello returningStringOrNumber function';
}

console.log(returnStringOrNumber());

// 12. interface(class, object) / typealias

interface Shape {
  getArea(): number; // Shape 이라는 interface에서는 getArea라는 함수가 있어야 한다. 반환형은 number여야 한다.
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number){
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number){
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}


const Circle1 = new Circle(5);
const Rectangle1 = new Rectangle(3,4);

console.log( 'Circle1: ', Circle1, 'Rectangle1 : ', Rectangle1);


// 13. compiler 확인해 보기
var hello = 'hello_var';
let hello1 = 'hello_let';