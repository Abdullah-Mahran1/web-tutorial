    //1) Variables and their types
    //2) Arithmetic and Boolean Operations
    //3) If-Else Statements
    //4) For & While Loops
    //5) Functions
    //6) Libraries


//1) Variables and their types
let name1 = "John"; // String
console.log(typeof name1);
let age = 25; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "coding", "sports"]; // Array
let person = {firstName: "Jane", lastName: "Doe"}; //  
const name2 = "John"; // constant String

// 2) Arithmetic and Boolean Operations
let sum = 10 + 5; // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let power = Math.pow(10, 2); // Power operation (10^2)
let quotient = 10 / 5; // Division
let remainder = 10 % 3; // Modulus

let isEqual = (5 === 5); // Equality check
let isGreater = (10 > 5); // Greater than check
let logicalAnd = (true && false); // Logical AND
let logicalOr = (true || false); // Logical OR

//3) If-Else Statements
let grade = 85;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else {
    console.log("C or below");
}

//4) For & While Loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

let items = ["apple", "banana", "cherry"];
for (let item of items) {
    console.log(item);
}

// While loop
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

//5) Functions
function greet() {
    return "Hello World!";
}

function addNumers(num1, num2) {
    result = num1 + num2;
    return "num1 + num2 = " + result + "!";
}

console.log(greet("Alice"));

//6) Libraries
// Using Math library
let randomNum = Math.random(); // Generates a random number between 0 and 1
let roundedNum = Math.round(4.7); // Rounds 4.7 to 5

// Using Date library
let today = new Date(); // Creates a new date object with the current date and time
let power2 = Math.pow(10, 2);
console.log(today.toDateString()); // Prints the date in a readable format