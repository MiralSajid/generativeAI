//Question1
let greeting: string = "Hello, World!";
console.log(greeting);
//Question2
let num1:number=4;
let num2: number=2;
let sum:number=num1+num2;
let diff:number=num1-num2;
let product:number=num1*num2;
let quotient:number=num1/num2;
let remainder:number=num1%num2;

console.log("Sum:", sum);
console.log("Difference:", diff);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

//question3
let a:number = 1,
  b:number = 2;

a = a + b; // Sum of a and b is assigned to a
b = a - b; // Difference of a(sum) and original b is assigned to b
a = a - b; // Difference of a(sum of original a and b) and new b(original a) is assigned to a

console.log("a:", a); // Output: 2
console.log("b:", b); // Output: 1 values swapped

//question4
let message: string;

// Attempting to assign a number to a variable typed as string
//message = 123;
 // Error: Type 'number' is not assignable to type 'string'

//console.log(message);

//question5
let num3:number=6,num4:number=5;
let remainder2:number=num3%num4;
console.log("Remainder:", remainder2);

//question6
let counter: number=0;
console.log("Original value of counter: ",counter);
//one way of increment
counter++;
console.log("output after 1st increment",counter);
counter+=1; //another way of increment
console.log("output after second increment: ",counter);

//question7
let x: boolean = true,
  y: boolean = false,
  z: boolean = true;

// AND Gate
let andResult: boolean = x && y; // true only if both x and y are true

// OR Gate
let orResult: boolean = y || z; // true if at least one of y or z is true

// NOT Gate
let notResultA: boolean = !x; // Inverts the value of x
let notResultC: boolean = !z; // Inverts the value of z

//question8
let num: number = 10;

// Using compound assignment operators
num += 5; // Equivalent to: num = num + 5;
console.log("After +=:", num); // Output: 15

num -= 3; // Equivalent to: num = num - 3;
console.log("After -=:", num); // Output: 12

num *= 2; // Equivalent to: num = num * 2;
console.log("After *=:", num); // Output: 24

num /= 4; // Equivalent to: num = num / 4;
console.log("After /=:", num); // Output: 6

//question9

let numb: number = 12; // You can assign any number to 'num'

// Check if 'num' is even or odd
if (numb % 2 === 0) //remainder is zero
 {
    console.log(numb + " is even.");
} else {
    console.log(numb + " is odd.");
}

//question10
let age: number = 20; // You can assign any age to 'age'

// Check if 'age' is 18 or older to determine voting eligibility
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}

//question11
let score: number = 85; // You can assign any numerical score to 'score'

// Use conditionals to assign and print grades
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//question12
let p: number = 10,
    q: number = 20,
    r: number = 15;

let max: number;

// Determine the largest among p , q and r
if (p >= q && p >= r) {
    max = p;
} else if (q >= p && q >= r) {
    max = q;
} else {
    max = r;
}

console.log("The maximum of", p + ",", q + ", and", r + " is:", max);

//question13
let year: number = 2024; // You can assign any year to 'year'

// Determine if 'year' is a leap year
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//question14

let fahrenheit: number = 68; // You can assign any Fahrenheit temperature to 'fahrenheit'

// Convert Fahrenheit to Celsius
let celsius: number = (fahrenheit - 32) * 5 / 9;

console.log(fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.");

//question15

let number: number = -10; // You can assign any number to 'number'

// Determine the sign of 'number'
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//question16

let number1: number = 5; // You can assign any number to 'number'

// Print the multiplication table for 'number' up to 10
console.log("Multiplication table for", number1 + ":");

for (let i = 1; i <= 10; i++) {
    console.log(number1 + " × " + i + " = " + (number1 * i));
}


