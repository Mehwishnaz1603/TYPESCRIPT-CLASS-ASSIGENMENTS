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

let peoples: {friends: Friend[]};
type Friend = { first_Name: string, last_Name: string,id?: number}       //Optional id array
let friend1: Friend = { first_Name: "Ahmed", last_Name: " Ali",id: 100};  //Create Three objects
let friend2: Friend = {first_Name: "Bisma",last_Name: "Khanzadi",id: 101};
let friend3: Friend = {first_Name: "Mehwish",last_Name: "Naz",};
let people = { friends: [friend1, friend2, friend3]}    // Add Friends Objects to the Friends array
console.log(people);                                         // display and information friend list

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

const scrambled_Array = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]  // Given Array
scrambled_Array.splice(2,2)   // For Removing unneccessary element in aarary
scrambled_Array.pop()         // For Removing last element of array
scrambled_Array.unshift("I")  // For Add element In start of array
scrambled_Array[1] = "am";    // Rearranging All element in Sequence
scrambled_Array[2] = "a";
scrambled_Array[3] = "student";
scrambled_Array[4] = "of";
scrambled_Array[5] = "GIAIC";
console.log(scrambled_Array.join(" "));  // for joining All element in Array

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand how to manage product data.

type Products = {name:string; model: string; cost: number; quantity: number}; // create object of produvts and its properties
let product_1: Products= { name: "Glasses", model: "XP568", cost: 2000, quantity: 15};              //object 1
let product_2: Products = {name: "Hand Bags", model: "R765", cost : 2500, quantity: 23};          //object 2
let product_3: Products = {name: "Alkaram Fabric", model: "Hq457", cost : 5000, quantity: 10};      //onject 3
let inventory  = { Product : [product_1,product_2,product_3]};
console.log("Quantity of third product in the Inventory Array:" ,inventory.Product[2].quantity); //Access property quantity third element array
let product_4: Products = {name: "Smart Watch", model: "Jk976", cost: 4000, quantity: 18};  //Adding  more element in array
inventory.Product.push(product_4);
console.log("Name of the first product:", inventory.Product[0].name);  //Exploring and axxessing more elements in inventory array
console.log("Cost of the second product:", inventory.Product[1].cost);
console.log("Model of the first product:", inventory.Product[2].model);

// Assignment 4: // Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic functions in TypeScript.
// Tasks: 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors and have completed their assignments.
// o Can you guess why this information might be helpful?// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have a function that removes students who haven't completed
// their assignments (assuming only seniors are responsible).// o Can you think of any reasons why this might be useful (consider limitations)

interface Student {name: string; is_Senior:boolean; assignments_Completion: boolean};  // Create interface
let students: Student[] = [
    { name: "Mehwish", is_Senior: true, assignments_Completion: true },  //storing student information in Array
    { name: "Amna", is_Senior: false, assignments_Completion: true },
    { name: "Bisma", is_Senior: true, assignments_Completion: false } ];
console.log(students);

let find_Seniors_Student_With_Assignments_Completion = (students: Student[]) => {  //  Find Senior students with assignment Completion
 return students.filter(student => student.is_Senior && student.assignments_Completion === true)};
console.log(find_Seniors_Student_With_Assignments_Completion(students));

let removes_Student= (students: Student[]) => {                               
return students.filter(student => student.assignments_Completion === false)}       // 4.Class list update
console.log(removes_Student(students));





