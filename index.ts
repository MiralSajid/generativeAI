import prompt from "prompt-sync";
const userInput=prompt();
//question1
console.log("Hello, World!");


//question2
let temperature: number = 15; 

if (temperature < 20) {
    console.log("It's cold!"); // Logging "It's cold!" if the temperature is below 20 degrees Celsius


}
//question3
let apples: number = 10; // Number of apples initially
let given: number = 3; // Number of apples given away

let remaining: number = apples - given; // Calculate the remaining apples

console.log("Remaining apples:", remaining); // Log the result



//question4
let firstName: string = "Miraal"; // First name
let lastName: string = "Sajid"; // Last name

let fullName: string = firstName + " " + lastName; // Combining first name and last name

console.log("Full Name:", fullName); // Logging the result


//question5
if (5 > 3) {
    console.log("Yes"); // Log "Yes" if the condition is true
} else {
    console.log("No"); // Log "No" if the condition is false
}


//question6
function calculateArea(radius: number): number {
    const area: number = Math.PI * radius * radius; // Calculate the area using the formula πr^2
    return area; // Return the calculated area
}

//question7
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//question8
let temperatures: number[] = [18, 22, 25, 20, 23]; // Array of temperatures

let highestTemperature: number = temperatures[0]; // Assume the first temperature is the highest

for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > highestTemperature) {
        highestTemperature = temperatures[i]; // Update highestTemperature if a higher temperature is found
    }
}

console.log("The highest temperature is:", highestTemperature);

//question9
let ageInput: string = userInput("Please enter your age:"); // Prompt user for age input

if (ageInput) {
    let age: number = parseInt(ageInput, 10); // Using base 10 (decimal) for parsing

    if (!isNaN(age)) {
        // Check if the parsed age is a valid number
        if (age < 18) {
            console.log("You are a minor.");
        } else {
            console.log("You are an adult.");
        }
    } else {
        console.log("Invalid input! Please enter a valid age.");
    }
} else {
    console.log("Invalid input! Please enter your age.");
}

//question10
function countPositiveNumbers(numbers: number[]): number {
    let count: number = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
let exampleArray: number[] = [1, -2, 3, 4, -5, 6];
let positiveCount: number = countPositiveNumbers(exampleArray);
console.log("Count of positive numbers:", positiveCount); // Output: 4

//question11

function wordsStartingWithA(words: string[]): string[] {
    // Initialize an empty array to store words that start with 'a'
    let result: string[] = [];
    // Iterate over each word in the input array
    for (let word of words) {
        // Check if the word starts with 'a' or 'A'
        if (word.toLowerCase().startsWith('a')) {
            // If it does, add it to the result array
            result.push(word);
        }
    }
    // Return the result array
    return result;
}
let words = ["apple", "banana", "avocado", "grape", "Apricot", "blueberry"];
let filteredWords = wordsStartingWithA(words);
console.log(filteredWords);  

//question12

let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];

function getSecondToLastElement(arr: string[]): string | undefined {
    // Check if the array has at least two elements
    if (arr.length < 2) {
        console.log("The array does not have enough elements.");
        return undefined;
    }
    // Return the second to last element
    return arr[arr.length - 2];
}
// Get the second to last element from the fruits array
let secondToLastFruit = getSecondToLastElement(fruits);
if (secondToLastFruit !== undefined) {
    console.log("The second to last fruit is:", secondToLastFruit);
} else {
    console.log("The array does not contain enough elements to determine the second to last element.");
}

//question13
function squareNumbers(numbers: number[]): number[] {
    // Initialize an empty array to store the squared numbers
    let squaredNumbers: number[] = [];
  
    for (let i = 0; i < numbers.length; i++) {
        // Square the number and add it to the new array
        squaredNumbers.push(numbers[i] * numbers[i]);
    }
    // Return the new array with squared numbers
    return squaredNumbers;
}
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);  

//question14
function ReverseNumbers(numbers: number[]): number[] {
    // Initialize an empty array to store the reversed numbers
    let reversedNumbers: number[] = [];
  
    for (let i = numbers.length-1; i >=0; i--) {
        
        reversedNumbers.push(numbers[i]);
    }
    // Return the new array with squared numbers
    return reversedNumbers;
}
let numbers2 = [1, 2, 3, 4, 7];
let reversedNumbers = ReverseNumbers(numbers2);
console.log(reversedNumbers); 

//question15
function ScoreExtremes(scores: number[]): void {
    // Initialize variables to track the maximum and minimum scores
    let maxScore = scores[0];
    let minScore = scores[0];
    // Initialize counters for exceeding max and falling below min
    let exceedMaxCount = 0;
    let belowMinCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            exceedMaxCount++;
        } else if (scores[i] < minScore) {
            minScore = scores[i];
            belowMinCount++;
        }
    }

    console.log(`Number of times the score exceeded the maximum score: ${exceedMaxCount}`);
    console.log(`Number of times the score fell below the minimum score: ${belowMinCount}`);
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
ScoreExtremes(scores);

//question16
function removeFalseyValues(arr: any[]): any[] {
    // Initialize an empty array to store truthy values
    let truthyValues: any[] = [];
    // Iterate over each element in the input array
    for (let value=0;value<arr.length;value++) {
        // Check if the value is truthy
        if (arr[value]) {
            truthyValues.push(arr[value]);
        }
    }
    // Return the array containing only truthy values
    return truthyValues;
}
let values = [0, 1, false, 2, '', 3, 'a', NaN, 'b', null, 'c', undefined];
let filteredValues = removeFalseyValues(values);
console.log(filteredValues); 

//question17
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];

let concatenatedArray: number[] = [];

// Loop through the first array and add each element to the concatenated array
for (let i = 0; i < array1.length; i++) {
    concatenatedArray.push(array1[i]);
}

// Loop through the second array and add each element to the concatenated array
for (let i = 0; i < array2.length; i++) {
    concatenatedArray.push(array2[i]);
}
console.log(concatenatedArray); 

//question18

function sumOfElements(arr: number[], even: boolean): number {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (even && element % 2 === 0) {
            sum += element;
        } else if (!even && element % 2 !== 0) {
            sum += element;
        }
    }

    return sum;
}
const arrayyy: number[] = [1, 2, 3, 4, 5, 6];
console.log(sumOfElements(arrayyy, true));  // Output: 12 (2 + 4 + 6)
console.log(sumOfElements(arrayyy, false)); // Output: 9 (1 + 3 + 5)

//question19

function findElementIndex(arr: any[], element: any): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

const arrayy1: number[] = [1, 2, 3, 4, 5, 6];
console.log(findElementIndex(arrayy1, 3));  // Output: 2
console.log(findElementIndex(arrayy1, 7));  // Output: -1

//question20
function findSmallestNumber(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

const arrayy: number[] = [3, 5, 1, 8, -2, 7];
console.log(findSmallestNumber(arrayy));

//question21
function calculateProduct(arr: number[]): number {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
console.log(calculateProduct([1, 2, 3, 4])); 

//question22
function filterByLength(arr: string[], n: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterByLength(["apple", "banana", "cherry", "date"], 5)); 

//question23


function findDuplicates(arr: any[]): void {
    const seen: any[] = []; 
    const duplicates: any[] = []; 
    for (let i = 0; i < arr.length; i++) { 
        if (seen.includes(arr[i])) { 
            if (!duplicates.includes(arr[i])) { 
                duplicates.push(arr[i]);
            }
        } else { 
            seen.push(arr[i]); 
        }
    }

    console.log(duplicates);

findDuplicates([1, 2, 3, 1, 4, 2, 5]); 
}

//question24
function incrementAll(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }
    return result;
}

console.log(incrementAll([1, 2, 3]));

//question25
function countOccurrences(arr: any[], element: any): number {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); 

//question26
function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4])); 
console.log(isSorted([1, 3, 2, 4])); 

//question27
function formatNames(names: string[]): string {
    if (names.length === 0) return '';
    if (names.length === 1) return names[0];
    if (names.length === 2) return names[0] + ' and ' + names[1];

    let result = '';
    for (let i = 0; i < names.length - 1; i++) {
        if (i < names.length - 2) {
            result += names[i] + ', ';
        } else {
            result += names[i] + ' and ' + names[i + 1];
        }
    }
    return result;
}
console.log(formatNames(["Maryam", "Ahmed", "Ayesha"])); 

//question28
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function convertTemperatures(temps: number[]): void {
    const celsiusTemps: number[] = [];
    for (let i = 0; i < temps.length; i++) {
        celsiusTemps.push(fahrenheitToCelsius(temps[i]));
    }
    console.log(celsiusTemps);
}

convertTemperatures([32, 68, 100]); 

//question29
function minMaxAverage(arr: number[]): { min: number, max: number, average: number } {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }

    return { min, max, average: sum / arr.length };
}

console.log(minMaxAverage([1, 2, 3, 4, 5])); 

//question30
function swapElements(arr: any[], index1: number, index2: number): void {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// Example usage:
const arrayyy1 = [1, 2, 3, 4];
swapElements(arrayyy1, 1, 3);
console.log(arrayyy1); 

//question31
function countCharacterOccurrences(str: string, char: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countCharacterOccurrences("hello world", "o")); 

//question32
type Task = { task: string, completed: boolean };

function logUncompletedTasks(tasks: Task[]): void {
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].completed) {
            console.log(tasks[i].task);
        }
    }
}
const tasks: Task[] = [
    { task: "Do laundry", completed: false },
    { task: "Clean room", completed: true },
    { task: "Buy groceries", completed: false }
];
logUncompletedTasks(tasks);

//question33
function sortArray(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]



//question34
function logArrayInReverse(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
logArrayInReverse([1, 2, 3, 4, 5]); 



//question35

function basicCalculator(operand1: number, operand2: number, operator: string): number | null {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand2 !== 0 ? operand1 / operand2 : null;
        default:
            return null;
    }
}
console.log(basicCalculator(10, 5, '+')); // Output: 15
console.log(basicCalculator(10, 5, '-')); // Output: 5
console.log(basicCalculator(10, 5, '*')); // Output: 50
console.log(basicCalculator(10, 5, '/')); // Output: 2
console.log(basicCalculator(10, 0, '/')); // Output: null (cannot divide by zero)
