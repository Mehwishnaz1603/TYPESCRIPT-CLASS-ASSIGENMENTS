// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.
var peoples;
var friend1 = { first_Name: "Ahmed", last_Name: " Ali", id: 100 }; //Create Three objects
var friend2 = { first_Name: "Bisma", last_Name: "Khanzadi", id: 101 };
var friend3 = { first_Name: "Mehwish", last_Name: "Naz", };
var people = { friends: [friend1, friend2, friend3] }; // Add Friends Objects to the Friends array
console.log(people); // display and information friend list
//  Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC" Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
// • Output the Result // • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambled_Array = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]; // Given Array
scrambled_Array.splice(2, 2); // For Removing unneccessary element in aarary
scrambled_Array.pop(); // For Removing last element of array
scrambled_Array.unshift("I"); // For Add element In start of array
scrambled_Array[1] = "am"; // Rearranging All element in Sequence
scrambled_Array[2] = "a";
scrambled_Array[3] = "student";
scrambled_Array[4] = "of";
scrambled_Array[5] = "GIAIC";
console.log(scrambled_Array.join(" ")); // for joining All element in Array
var product_1 = { name: "Glasses", model: "XP568", cost: 2000, quantity: 15 }; //object 1
var product_2 = { name: "Hand Bags", model: "R765", cost: 2500, quantity: 23 }; //object 2
var product_3 = { name: "Alkaram Fabric", model: "Hq457", cost: 5000, quantity: 10 }; //onject 3
var inventory = { Product: [product_1, product_2, product_3] };
console.log("Quantity of third product in the Inventory Array:", inventory.Product[2].quantity); //Access property quantity third element array
var product_4 = { name: "Smart Watch", model: "Jk976", cost: 4000, quantity: 18 }; //Adding  more element in array
inventory.Product.push(product_4);
console.log("Name of the first product:", inventory.Product[0].name); //Exploring and axxessing more elements in inventory array
console.log("Cost of the second product:", inventory.Product[1].cost);
console.log("Model of the first product:", inventory.Product[2].model);
; // Create interface
var students = [
    { name: "Mehwish", is_Senior: true, assignments_Completion: true }, //storing student information in Array
    { name: "Amna", is_Senior: false, assignments_Completion: true },
    { name: "Bisma", is_Senior: true, assignments_Completion: false }
];
console.log(students);
var find_Seniors_Student_With_Assignments_Completion = function (students) {
    return students.filter(function (student) { return student.is_Senior && student.assignments_Completion === true; });
};
console.log(find_Seniors_Student_With_Assignments_Completion(students));
var removes_Student = function (students) {
    return students.filter(function (student) { return student.assignments_Completion === false; });
}; // 4.Class list update
console.log(removes_Student(students));
