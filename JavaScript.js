/* Problem: Create a program that stores your favorite book's title, the year it was published, and whether you've read 
it or not. Print out a sentence using these variables, e.g., "My favorite book is '1984', published in 1949, and I have 
read it: true." */

let BookTitle = "1984";
let PublicationYear = 1949;
let Is_Read = true;

console.log("My favorite book is '" + BookTitle + "', published in " + PublicationYear + ", and I have read it: " + Is_Read + ".");

/* 
Problem: Write a program that calculates the area and perimeter of a rectangle. Take the length and width as variables,
and use arithmetic operators to find the area (length * width) and perimeter (2 * (length + width)). */

let length = 10;
let width = 5;

let area = length * width;
let perimeter = 2 * (length + width);

console.log("Area of the rectangle: " + area);
console.log("Perimeter of the rectangle: " + perimeter);


/* Problem: Write a program that takes a number as input and checks if the number is positive, negative, or zero using 
if-else statements. Additionally, use a switch statement to print the grade ("A", "B", "C", etc.) based on a numerical 
score input (90-100: "A", 80-89: "B", etc.). */

const prompt = require("prompt-sync")();

const score = Number(prompt("Enter your score (0-100):"));

let grade = '';

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        console.log("Invalid score.");
        break;
}

if (grade) {
    console.log(`The grade is: ${grade}`);
}



/* Problem: Write a program that asks the user for their age and tells them whether they are a child (under 12), a 
teenager (13-19), an adult (20-64), or a senior (65 and older) using if-else if-else. */

const age = prompt("Enter a age:");

const userAge = Number(age);

if (isNaN(userAge) || userAge < 0) {
    console.log("Enter age.");
} else if (userAge < 12) {
    console.log("Child.");
} else if (userAge >= 13 && userAge <= 19) {
    console.log("Teenager.");
} else if (userAge >= 20 && userAge <= 64) {
    console.log("Adult.");
} else if (userAge >= 65) {
    console.log("Senior.");
} else {
    console.log("Enter a valid age.");
}


/* Problem: Write a program that prints out the multiplication table for a given number using a for loop. Use a while loop 
to sum all numbers from 1 to 100. Finally, use a do...while loop to count down from 10 to 1. */

const number = prompt("Enter number for multiplication table:");
const num = Number(number);

console.log(`Multiplication Table for ${num}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

console.log(`Sum of numbers from 1 to 100 is: ${sum}`);
let countdown = 10;

console.log("Countdown from 10 to 1:");
do {
    console.log(countdown);
    countdown--;
} while (countdown >= 1);


/* Problem: Write a program that creates an array of your favorite movies. Add two more movies to the list using push,
remove the first movie using shift, and then use map to print each movie title in uppercase. */

let Movies = ["12 Angry Men", "TForrest Gump", "Civil War"];

Movies.push("Seven Samurai", "The Garfield Movie");

Movies.shift();
Movies.map(movie => console.log(movie.toUpperCase()));

/* Problem: Write a program that takes a sentence as input and returns the number of vowels in the sentence. Use string 
methods to convert the string to lowercase and then count the vowels. */

const sentence = prompt("Enter a Sentence:");

const lowerCaseSentence = sentence.toLowerCase();

let vowelCount = 0;

const vowels = "aeiou";

for (let char of lowerCaseSentence) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}

console.log(`Number of vowels: ${vowelCount}`);


