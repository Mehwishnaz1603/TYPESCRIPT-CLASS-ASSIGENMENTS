// Function Assigenment Homework:

// Q1: write a javascript function that accepts a  string as a parameter and counts the number
// of vowels within the string

 // Define a function named vowel_count that takes a string parameter (str1)
 function vowels_count(string) {
 // Define a string containing all the vowels in both lowercase and uppercase
  let vowel_list = "aeiouAEIOU";
 // Initialize a variable vowelscount to count the number of vowels
  let countingOfVowels = 0;
// Iterate through each character in the input string
  for (let i= 0; i < string.length; i++) 
    if (vowel_list.indexOf(string[i]) !== -1)
// If the character is a vowel, increment the vowel count
     { countingOfVowels += 1}
    //Return the total count of vowels in the input string
  return countingOfVowels;
   }
// Log the result of calling vowel_count with the input string 'The quick brown fox' to the console
console.log(vowels_count("The quick brown fox jump over the lazy dog")); 

//Q2:write a javascript function that accepts a  string as a parameter and check weather it is
// prime or not using recusion in typescript coding

// Function to check prime number
function checkPrime(string) {
  let i, condition = true;
  for (i = 2; i <= string - 1; i++) {
      if ( i == 0) {
      condition = false;
          break;
      }
  }
  if (condition == true)
      console.log(string + " is prime");
  else
      console.log(string + " is not prime");
}
checkPrime(4);
checkPrime(5);

//Q3: Write a javascript function to find the first not repeated character.

// Define a function named find_FirstNotRepeatedChar that finds the first non-repeated character in a given string
 function firstNonRepeatingCharacter(str) {
 for (let i = 0; i < str.length; i++) {
  let char = str[i];
// Initialize variables result and character for storing the result and counting character occurrence
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
// Return the first non-repeated character found
   return "_";
}
// Log the result of calling find_FirstNotRepeatedChar with the input string 'abacddbec' to the console
console.log(firstNonRepeatingCharacter('abacddbec')); 
  
//Q4: Write a function that returns the square of a number.

function findSquare(num) {
  return num*num;
}
console.log(findSquare(2)) 
console.log(findSquare(9)) 
console.log(findSquare(15)) 

//Q5:Function displayMessage() prints "Hello World" string using console.log()function
function displayMessage() {
  console.log("Hello World");
}
displayMessage(); 


  

