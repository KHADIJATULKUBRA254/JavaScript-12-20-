//---Chapter (12-20)
// Question 1
let char = prompt("Enter a character:");
if (!isNaN(char)) {
    alert("It is a number.");
} else if (char >= 'A' && char <= 'Z') {
    alert("It is an uppercase letter.");
} else if (char >= 'a' && char <= 'z') {
    alert("It is a lowercase letter.");
} else {
    alert("Invalid input.");
}

// Question 2
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
    alert(`${num1} is larger.`);
} else if (num1 < num2) {
    alert(`${num2} is larger.`);
} else {
    alert("Both integers are equal.");
}

// Question 3
let number = parseInt(prompt("Enter a number:"));
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// Question 4
let singleChar = prompt("Enter a single character:");
if ("aeiouAEIOU".includes(singleChar)) {
    alert("True, it is a vowel.");
} else {
    alert("False, it is not a vowel.");
}

// Question 5
let correctPassword = "myPassword123";
let userPassword = prompt("Enter your password:");
if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

// Question 6
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

// Question 7
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));
if (time >= 0 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
} else {
    alert("Invalid time format.");
}


// 1. Declare an empty array using JS literal notation
let studentNames = [];

// 2. Declare an empty array using JS object notation
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array
let stringsArray = ["Hello", "World", "JavaScript"];

// 4. Declare and initialize a numbers array
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array
let mixedArray = ["Hello", 42, true, null];

// 7. Declare and initialize an array of education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h1>Qualifications:</h1>");
qualifications.forEach(qual => document.write(`<p>${qual}</p>`));

// 8. Program for student names and scores
let students = ["Ali", "Ahmed", "Ayesha"];
let scores = [450, 380, 420];
let totalMarks = 500;
students.forEach((student, index) => {
  let percentage = (scores[index] / totalMarks) * 100;
  document.write(`<p>${student} scored ${scores[index]} (${percentage}%)</p>`);
});

// 9. Color names manipulation
let colors = ["Red", "Green", "Blue"];
let color = prompt("Enter a color to add to the beginning:");
colors.unshift(color);
document.write(colors);
color = prompt("Enter a color to add to the end:");
colors.push(color);
document.write(colors);
colors.unshift("Yellow", "Orange");
document.write(colors);
colors.shift();
document.write(colors);
colors.pop();
document.write(colors);
let index = prompt("Enter the index to add a color:");
color = prompt("Enter the color name:");
colors.splice(index, 0, color);
document.write(colors);
index = prompt("Enter the index to delete colors:");
let count = prompt("How many colors to delete?");
colors.splice(index, count);
document.write(colors);

// 10. Sort student scores
let scoresArray = [320, 230, 480, 120];
scoresArray.sort((a, b) => a - b);
document.write(scoresArray);

// 11. Copy cities array
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 5);
document.write(selectedCities);

// 12. Create a single string from array
let arr = ["This", "is", "my", "cat"];
let joinedString = arr.join(" ");
document.write(joinedString);

// 13. FIFO array
let fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
document.write(fifoArray.shift());
document.write(fifoArray.shift());
document.write(fifoArray.shift());

// 14. LIFO array
let lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
document.write(lifoArray.pop());
document.write(lifoArray.pop());
document.write(lifoArray.pop());

// 15. Phone manufacturers dropdown
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
manufacturers.forEach(manufacturer => {
  document.write(`<option>${manufacturer}</option>`);
});
document.write('</select>');


// 1. Declare and initialize an empty multidimensional array
let multiArray = [[], []];

// 2. Declare and initialize a multidimensional array representing a matrix
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// 3. Print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Print multiplication table of any number with input for table number and length
let tableNumber = parseInt(prompt("Enter the table number:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// 5. Print items of an array using a for loop
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 6. Generate series in the browser
let counting = Array.from({ length: 15 }, (_, i) => i + 1).join(", ");
let reverseCounting = Array.from({ length: 10 }, (_, i) => 10 - i).join(", ");
let even = Array.from({ length: 11 }, (_, i) => i * 2).join(", ");
let odd = Array.from({ length: 10 }, (_, i) => i * 2 + 1).join(", ");
let series = Array.from({ length: 10 }, (_, i) => `${(i + 1) * 2}k`).join(", ");
console.log(`Counting: ${counting}`);
console.log(`Reverse Counting: ${reverseCounting}`);
console.log(`Even: ${even}`);
console.log(`Odd: ${odd}`);
console.log(`Series: ${series}`);

// 7. Search by user input in an array
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter an item to search:").toLowerCase();
if (A.includes(searchItem)) {
    alert(`${searchItem} is available at index ${A.indexOf(searchItem)} in our bakery.`);
} else {
    alert(`We are sorry, ${searchItem} is not available in our bakery.`);
}

// 8. Identify the largest number in the array
let B = [24, 53, 78, 91, 12];
let largest = Math.max(...B);
console.log(`Largest number is ${largest}`);

// 9. Identify the smallest number in the array
let smallest = Math.min(...B);
console.log(`Smallest number is ${smallest}`);

// 10. Print multiples of 5 ranging from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
