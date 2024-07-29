//question2
let personName1: string = "Eric";
let message: string = `Hello ${personName1}, would you like to learn some Python today?`;

console.log(message);

//question3
let personName: string = "eric";

let lowerCaseName: string = personName.toLowerCase();
let upperCaseName: string = personName.toUpperCase();
let titleCaseName: string = personName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

console.log("Lowercase: " + lowerCaseName);
console.log("Uppercase: " + upperCaseName);
console.log("Titlecase: " + titleCaseName);

//question4
// Author: [Your Name]
// Date: [Current Date]
// This program stores a famous quote and prints it with the author's name
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, “${quote}”`);

//question5

let famous_person: string = "Mahatma Gandhi";
let quote2: string = "Be the change that you wish to see in the world.";
let message2: string = `${famous_person} once said, “${quote2}”`;

console.log(message2);


//question6
let personName2: string = "\t\n  Eric  \n\t";
console.log("Name with whitespace:" + personName2);


let strippedName: string = personName2.trim();
console.log("Name after stripping whitespace:" + strippedName);

//question7
// Author: [Your Name]
// Date: [Current Date]
// This program performs basic arithmetic operations to result in the number 8 and prints each result.

console.log("Addition: " + (5 + 3));
console.log("Subtraction: " + (10 - 2));
console.log("Multiplication: " + (4 * 2));
console.log("Division: " + (16 / 2));

//question8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//question9
let favoriteNumber: number = 7; // Replace 7 with your favorite number
let message1: string = `My favorite number is ${favoriteNumber}.`;

console.log(message1);

//question10
//done on question4 and question7

//question11
let names: string[] = ["Usama", "Faizah", "Faiqa", "Maham"];

// Print each name by accessing each element in the array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//question12

for (let i = 0; i < names.length; i++) {
    let name: string = names[i];
    console.log(`Hello ${name}, how are you today?`);
}

//question13
let transportationModes: string[] = ["Honda motorcycle", "Tesla car", "Boeing 747", "Yamaha boat"];

for (let i = 0; i < transportationModes.length; i++) {
    let mode: string = transportationModes[i];
    console.log(`I would like to own a ${mode}.`);
}

//question14
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

for (let i = 0; i < guestList.length; i++) {
    let guest: string = guestList[i];
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}

//question15
let unableToAttend: string = "Leonardo da Vinci";

// Print a message about the guest who can't make it
console.log(`${unableToAttend} can’t make it to dinner.`);


guestList = guestList.filter(guest => guest !== unableToAttend);
guestList.push("Ada Lovelace");

for (let i = 0; i < guestList.length; i++) {
    let guest: string = guestList[i];
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}

//question16
console.log("Good news! We found a bigger dinner table, so we can invite more guests.");

// Adding one new guest to the beginning of the array
guestList.unshift("Isaac Newton");

// Adding one new guest to the middle of the array
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Nikola Tesla");

// Adding one new guest to the end of the array
guestList.push("Galileo Galilei");

// Print new invitations for the updated guest list
for (let i = 0; i < guestList.length; i++) {
    let guest: string = guestList[i];
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
//question 19
console.log(`I am inviting ${guestList.length} people to dinner.`);



//question17

// Inform about the reduced number of invitations
console.log("Due to a smaller dinner table, we can only invite two people to dinner.");

// Remove guests one at a time and print a message to each
while (guestList.length > 2) {
    let removedGuest: string = guestList.pop()!;
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two remaining guests
for (let i = 0; i < guestList.length; i++) {
    let guest: string = guestList[i];
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// Remove the last two names to empty the list
guestList.pop(); // Remove first guest
guestList.pop(); // Remove second guest

// Print the final state of the list
console.log("Final guest list:", guestList);


//question18

// Array of places I want to visit
let placesToVisit: string[] = ["Kyoto", "Cape Town", "Reykjavik", "Barcelona", "Machu Picchu"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order by printing it
console.log("Original order after alphabetical sort:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order by printing it again
console.log("Original order after reverse alphabetical sort:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Original order restored:", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array so it's stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);


//question 19
//done in question 16

//question 20
let cities: string[] = ["Detroit", "Italy", "Tokyo", "Amsterdam", "Lahore"];

// Print each city in the list
for (let city of cities) {
    console.log(city);
}

//question21
class City {
    name: string;
    country: string;
    landmark: string;

    constructor(name: string, country: string,  landmark: string) {
        this.name = name;
        this.country = country;
        this.landmark = landmark;
    }

    printDetails(): void {
        console.log(`City: ${this.name}`);
        console.log(`Country: ${this.country}`);
        console.log(`Famous Landmark: ${this.landmark}`);
    }
}

let city = new City("Lahore", "Pakistan",  "Minar e Pakistan");
city.printDetails();

//question23
let car = 'subaru';
let color = 'blue';
let age = 25;
let temperature = 30;
let fruit = 'banana';
let isStudent = true;
let score = 85;
let language = 'TypeScript';
let height = 180;

// True tests
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is color == 'blue'? I predict True.");
console.log(color == 'blue');

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is temperature <= 30? I predict True.");
console.log(temperature <= 30);

console.log("Is isStudent == true? I predict True.");
console.log(isStudent == true);

// False tests
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is color == 'red'? I predict False.");
console.log(color == 'red');

console.log("Is height==170? I predict False.");
console.log(height==170);

console.log("Is temperature > 30? I predict False.");
console.log(temperature > 30);

console.log("Is fruit == 'apple'? I predict False.");
console.log(fruit=='apple');

//question24

let fruits = ['Apple', 'Banana', 'Cherry'];

// Tests for equality and inequality with strings
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru');

console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');

console.log("Is car == 'Honda'? I predict False.");
console.log(car == 'Honda');

console.log("Is car != 'Subaru'? I predict False.");
console.log(car != 'Subaru');

// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'honda'? I predict False.");
console.log(car.toLowerCase() == 'honda');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 25? I predict True.");
console.log(age == 25);

console.log("Is age != 30? I predict True.");
console.log(age != 30);

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is age < 30? I predict True.");
console.log(age < 30);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 25? I predict True.");
console.log(age <= 25);

console.log("Is age == 30? I predict False.");
console.log(age == 30);

console.log("Is age != 25? I predict False.");
console.log(age != 25);

console.log("Is age > 30? I predict False.");
console.log(age > 30);

console.log("Is age < 20? I predict False.");
console.log(age < 20);

console.log("Is age >= 30? I predict False.");
console.log(age >= 30);

console.log("Is age <= 20? I predict False.");
console.log(age <= 20);

// Tests using "and" and "or" operators
console.log("Is age > 20 and temperature < 35? I predict True.");
console.log(age > 20 && temperature < 35);

console.log("Is age < 20 or temperature > 25? I predict True.");
console.log(age < 20 || temperature > 25);

console.log("Is age < 20 and temperature > 25? I predict False.");
console.log(age < 20 && temperature > 25);

console.log("Is age > 20 or temperature > 35? I predict False.");
console.log(age > 30 || temperature > 35);

// Test whether an item is in an array
console.log("Is 'Apple' in fruits? I predict True.");
console.log(fruits.includes('Apple'));

console.log("Is 'Mango' in fruits? I predict False.");
console.log(fruits.includes('Mango'));

// Test whether an item is not in an array
console.log("Is 'Mango' not in fruits? I predict True.");
console.log(!fruits.includes('Mango'));

console.log("Is 'Apple' not in fruits? I predict False.");
console.log(!fruits.includes('Apple'));

//question 25
let alien_color = 'green';

if (alien_color === 'green') {
    console.log("You just earned 5 points.");
}
alien_color = 'red';

if (alien_color === 'green') {
    console.log("You just earned 5 points.");
}

//question 26
//runs if block
alien_color = 'green';

if (alien_color === 'green') {
    console.log("You just earned 5 points for shooting the alien.");
} else {
    console.log("You just earned 10 points.");
}
//runs else block
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("/nYou just earned 5 points for shooting the alien.");
} else {
    console.log("You just earned 10 points.");
}


//question 27
//green
alien_color = 'green';

if (alien_color === 'green') {
    console.log("You earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color === 'red') {
    console.log("You earned 15 points.");
}
//yellow
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("You earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color === 'red') {
    console.log("You earned 15 points.");
}

//red
alien_color = 'red';

if (alien_color === 'green') {
    console.log("You earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color === 'red') {
    console.log("You earned 15 points.");
}
//question 28
let age1 = 28;

if (age1 < 2) {
    console.log("The person is a baby.");
} else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler.");
} else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid.");
} else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager.");
} else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult.");
} else if (age1 >= 65) {
    console.log("The person is an elder.");
}

//question 29

let favorite_fruits = ['Apple', 'Banana', 'Mango'];

if (favorite_fruits.includes('Apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('Banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('Mango')) {
    console.log("You really like mangos!");
}

if (favorite_fruits.includes('Orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes('Strawberry')) {
    console.log("You really like strawberries!");
}

//question 30
let usernames = ['admin', 'Eric', 'John', 'Alice', 'Bob'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//question31
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}
//question32
let current_users = ['Eric', 'John', 'Alice', 'Bob', 'admin'];
let new_users = ['eric', 'Sam', 'ALICE', 'David', 'Admin'];

for (let new_user of new_users) {
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`The username ${new_user} is already in use. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}
//question33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log("1st");
    } else if (number === 2) {
        console.log("2nd");
    } else if (number === 3) {
        console.log("3rd");
    } else {
        console.log(`${number}th`);
    }
}
//question34
let pizzas = ['Pepperoni', 'Crown crust', 'BBQ Chicken'];

for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

//question35
let animals = ['Dog', 'Cat', 'Rabbit'];

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");
//question 36

function make_shirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and the message is "${message}".`);
}

make_shirt('Large', 'I love TypeScript');

//question 37

function make_shirt1(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and the message is "${message}".`);
}

make_shirt1();
make_shirt1('Medium');
make_shirt1('Small', 'JavaScript is cool');

////question 38
function describe_city(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}

describe_city('Lahore');
describe_city('Karachi');
describe_city('Tokyo', 'Japan');

//question 39

function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}

console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('New York', 'USA'));
console.log(city_country('Tokyo', 'Japan'));

//question 40
function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album('Pink Floyd', 'The Dark Side of the Moon'));
console.log(make_album('The Beatles', 'Abbey Road', 17));
console.log(make_album('Led Zeppelin', 'IV'));

//question 41
let magicians:string[] = ['David Copperfield', 'Doug Henning', 'Penn & Teller'];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);
//question 42 
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = 'The Great ' + magicians[i];
    }
}
make_great(magicians);
show_magicians(magicians);
//question 43
let original_magicians = ['David Copperfield', 'Doug Henning', 'Penn & Teller'];

function make_great1(magicians: string[]) {
    let new_magicians = [...magicians];
    for (let i = 0; i < new_magicians.length; i++) {
        new_magicians[i] = 'The Great ' + new_magicians[i];
    }
  
    return new_magicians;
}

let great_magicians = make_great1([...original_magicians]);

show_magicians(original_magicians);
show_magicians(great_magicians);
//question 44
function make_sandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(item);
    }
    console.log("Your sandwich is ready!");
}

make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
//question 45
function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]) {
    let car = { manufacturer, model };
    for (let option of options) {
        Object.assign(car, option);
    }
    return car;
}

let car1 = create_car('Toyota', 'Camry', { color: 'blue', year: 2021 });
console.log(car1);
