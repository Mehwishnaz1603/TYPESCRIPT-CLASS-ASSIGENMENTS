// Functions //
// Functions arae the fundamental building block of any application in Java Script.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  Basic Functions.
// //Simple Function// // Anonymouse and Fatal Functions are also known as simple functions//
// Returning Function Values:
// Functions can return thevresult of theri operations.
// //Different conditions Examples in Simple Function//
function task1(name, age) {
    console.log("HelloMy name is", name, "and my age is", age); //simple implementation
}
task1("Mehwishnaz", 26);
/////////////////////////
function task2(name, age) {
    console.log("HelloMy name is,".concat(name, ",and my age is ").concat(age)); //templete literal implementation
}
task2("Mehwishnaz", 26);
///////////////////////////
// //In this case we have assign ?parameter but not declare its value//
function task3(name, age, classes) {
    // In paramaters we have option to define any parameter withou define datatypes by the use of Question mark? with parameter
    console.log("Hello, My name is", name, "and my age is", age); //in this cas we have not declare value of paramter which assign
    //with question mark its optional if we have declare value of ?parameter its run the value of parameter otherwise if we 
    //have not declare value of ?parameter code will still run this does not impact of running code its just optional..
}
task3("MehwishNaz", 26);
/////////////////////////////////
//In this case we have assign ?parameter and declare its value//
function task_3(name, age, classes) {
    console.log("Hello My name is", name, "my age is", age, "and this statement is", classes);
}
task_3("MehwishNaz", 26, "true");
//////////////////////////
function task4(name, age) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    //withour declaration of data types// rest id declare with three dots in start of resrt like ...rest
    console.log.apply(// by the use of rest in parameters we have declared multple parameters
    console, __spreadArray(["Hello My name is ", name, "my age is", age, "and"], rest, false));
    return task4; //by the use of return in function we have change parameters value without write multiple time s of code
    // in one code we have change paraameteres value in different times 
}
task4("Mehwishnaz", 26, "I am student of GIAIC", "Thurday 9 to 12 PM", "My Class Teacher Name is Hamza Alvi");
task4("Noorulain", 20, "I also student og GIAIC");
task4("Maha", 22, "I am not Intresting");
task4("Ayesha", 24);
//////////////////////
// Arrow Function //
// In Arrow funcrion we have not write keyword function Arrow Function is declare with this sign =>
// Arrow function especially use for one line of Code//
// Different conditions Examples in Arrow Function//
var task5 = function (userName) { return console.log("Hello My name is ".concat(userName)); }; //code of one parameter we have not need to declare data types
task5("MehwishNaz");
////////////////////////
var task6 = function (userName, age) {
    return console.log("Hello My name is ".concat(userName, ", and my age is ").concat(age));
};
task6("MehwishNaz", 26); // in code of multple parameters its compulsory to define parameters in Arrow Function
///////////////////////
var task7 = function (userName, age, myID) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    console.log("Hello My name is ".concat(userName, ", my age is ").concat(age, ", ").concat(myID, ", ").concat(rest));
    return task7;
}; // use of return function in Arrow function are same as simple function//
task7("MehwishNaz", 26, 2255678, "I am student of GIAIC", "Thurday 9 to 12 PM", "Batch 10");
task7("Noorulain", 20, 98e7, "I am teeager");
/////////////////////////
//EXAMPLES//
// soppose recipe of halffry egg //
// we have three ingriedents //
// egg, butter, salt
var egg = "2";
var butter = "1";
var salt = "2";
function halffry(salt, butter) {
    var cooked = 1 + salt + butter;
    console.log(cooked);
    return halffry;
}
// call 2 different aur multiple condition in one function// by using return operator in function
halffry(2, 2);
halffry(1.5, 2);
halffry(3, 2);
var halffryomlete = function () { return 2 + 2 + 3; };
var recipe = halffryomlete();
console.log(halffryomlete);
function tea(suger, milk) {
    var cooked = suger + milk + 3;
    return cooked;
}
var response = tea(2, 3);
console.log(response);
var juice = function () { return 1 + 1.5 + 3; };
var responses;
console.log(response);
