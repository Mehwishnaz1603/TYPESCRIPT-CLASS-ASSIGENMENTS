// 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate  whether each lesson is running this year.
// Steps to Follow:
// 1. Create a blank array: Start by setting up an empty array named myWork that will hold objects
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",  "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have 
// status: false, and so on.
// 3. Add the lesson to the array: Push each lesson object into the myWork array.
// 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
// Hints: • Use a ternary operator to set the status property based on whether the lesson number is odd or even.
// • The modulo operator % can help determine if a number is even or odd.
var my_Work = []; // Create an empty array to hold lesson objects
for (var i_1 = 1; i_1 <= 10; i_1++) { // Loop through numbers 1 to 10 and create lesson objects with alternating statuses
    var lesson = {
        name: "Lesson ".concat(i_1),
        status: i_1 % 2 === 0 ? false : true
    };
    my_Work.push(lesson);
}
console.log(my_Work); // Print the list of lesson objects
// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly 
// generated number between 1 and a specified maximum value using a predefined set of guesses. Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a  random number between 1 and the maximum value. 
// Log this value to the console for development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low.
var max_Value = 10;
var randomNumber = Math.floor(Math.random() * max_Value) + 1; // Generate a random number
console.log("Random number:", randomNumber);
var guessCorrect = false; // Track the guess status
var predefinedGuesses = [3, 7, 5, 9, 2, 6]; // Simulate user guesses
var i = 0; // Iterate over guesses
while (!guessCorrect && i < predefinedGuesses.length) {
    var currentGuess = predefinedGuesses[i];
    console.log("Current guess:", currentGuess);
    if (currentGuess === randomNumber) { // Step 6: Check the user's guess
        console.log("Congratulations! You guessed the correct number.");
        guessCorrect = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Too low! Try again.");
    }
    else {
        console.log("Too high! Try again.");
    }
    i++;
}
;
// 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a 
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// Steps to Follow: // 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold the value by which the counter will be incremented.
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by 
// the step amount each iteration./
// 4. Continue to loop until the counter is equal to or more than 100: The loop should run as long as the counter is less than 100.
var counter = 0; // Set the starting counter to 0
var step = 15; // Create a variable, step, to increase your counter by
do { // Add a do...while loop
    console.log("Counter value:", counter);
    counter += step;
} while (counter <= 100);
// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using a for...in loop.
// Instructions: // 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3, each with corresponding string values.
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the  console.
var my_Object = { item_1: "Bags", item_2: "Shirts", item_3: "Laptops" }; // Create a simple object with three items properties
for (var x in my_Object) { // Step 2: Use a for...in loop to get properties' names and values from the object
    if (my_Object.hasOwnProperty(x)) {
        console.log("Property name: ".concat(x, ", Value: ").concat(my_Object[x]));
    }
    ;
}
;
// 5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops to iterate through array elements.
// Instructions: // 1. Create an empty array:  o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:  o Use a for loop to iterate 10 times.
// o In each iteration, add a new incrementing value (starting from 1) to the myArray.
// 3. Log the array into the console:
// o After populating the array, log the myArray into the console.
// 4. Use the for loop to iterate through the array: o Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array. o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements. o Output each array element directly into the console.
var my_Array = []; // Create an empty array
for (var num = 1; num <= 10; num++) { //  Run a loop 10 times, adding a new incrementing value to the array
    my_Array.push(num);
}
console.log("Array", my_Array); //console for print loop 10 times
console.log("Using for loop:"); // Use the for loop to iterate through the array
for (var i_2 = 0; i_2 < my_Array.length; i_2++) {
    console.log("Index ".concat(i_2, ": ").concat(my_Array[i_2]));
}
console.log("Using for...of loop:"); // Use the for...of loop to output the value into the console from the array
for (var _i = 0, my_Array_1 = my_Array; _i < my_Array_1.length; _i++) {
    var element = my_Array_1[_i];
    console.log(element);
}
