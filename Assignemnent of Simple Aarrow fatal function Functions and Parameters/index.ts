// Functions //
// Functions ara the fundamental building block of any application in Java Script.

//  Basic Functions.
// //Simple Function// // Anonymouse and Fatal Functions are also known as simple functions//

// Returning Function Values:
// Functions can return thevresult of theri operations.

// //Different conditions Examples in Simple Function//
 function task1(name:string, age:number){
 console.log("HelloMy name is",name,"and my age is",age);//simple implementation
 }
 task1("Mehwishnaz", 26);
             /////////////////////////

 function task2(name:string, age:number){
 console.log(`HelloMy name is,${name},and my age is ${age}`);//templete literal implementation
 }
 task2("Mehwishnaz", 26);
             ///////////////////////////

// //In this case we have assign ?parameter but not declare its value//
 function task3(name:string, age:number,classes?){ 
// In paramaters we have option to define any parameter withou define datatypes by the use of Question mark? with parameter
 console.log("Hello, My name is",name,"and my age is",age) //in this cas we have not declare value of paramter which assign
//with question mark its optional if we have declare value of ?parameter its run the value of parameter otherwise if we 
//have not declare value of ?parameter code will still run this does not impact of running code its just optional..
 }
 task3("MehwishNaz", 26)
             /////////////////////////////////

//In this case we have assign ?parameter and declare its value//
 function task_3(name:string, age:number,classes?){
 console.log("Hello My name is",name,"my age is",age,"and this statement is",classes)
 }
 task_3("MehwishNaz", 26,"true")
            //////////////////////////

 function task4(name:string, age:number,...rest){ // by the use of rest in parameters we have declared multple parameters
//withour declaration of data types// rest id declare with three dots in start of resrt like ...rest
 console.log("Hello My name is ", name ,"my age is", age ,"and" ,...rest)
 return task4    //by the use of return in function we have change parameters value without write multiple time s of code
// in one code we have change paraameteres value in different times 
 }
 task4("Mehwishnaz", 26,"I am student of GIAIC","Thurday 9 to 12 PM","My Class Teacher Name is Hamza Alvi")
 task4("Noorulain",20,"I also student og GIAIC" )
 task4("Maha",22,"I am not Intresting")
task4("Ayesha",24)

             //////////////////////

// Arrow Function //
// In Arrow funcrion we have not write keyword function Arrow Function is declare with this sign =>
// Arrow function especially use for one line of Code//
// Different conditions Examples in Arrow Function//

let task5 = userName  =>console.log(`Hello My name is ${userName}`)//code of one parameter we have not need to declare data types
task5("MehwishNaz")
            ////////////////////////

let task6 = (userName:string, age:number)=>
console.log(`Hello My name is ${userName}, and my age is ${age}`)
task6("MehwishNaz", 26) // in code of multple parameters its compulsory to define parameters in Arrow Function
            ///////////////////////

let task7 = (userName:string, age:number, myID?, ...rest) =>{
    console.log(`Hello My name is ${userName}, my age is ${age}, ${myID}, ${rest}`)
    return task7} // use of return function in Arrow function are same as simple function//
task7("MehwishNaz", 26, 2255678,"I am student of GIAIC","Thurday 9 to 12 PM","Batch 10")
task7("Noorulain", 20, 98e7, "I am teeager")
            /////////////////////////

//EXAMPLES//
// soppose recipe of halffry egg //
// we have three ingriedents //
// egg, butter, salt

let egg = "2";
let butter = "1";
let salt = "2"
function halffry (salt:number, butter:number){
    let cooked =1+salt+butter
     console.log(cooked);
     return halffry
     }
     // call 2 different aur multiple condition in one function// by using return operator in function
     halffry(2,2)
     halffry(1.5,2)
    halffry(3,2)

 let halffryomlete =() =>2+2+3
 let recipe:number= halffryomlete()
 console.log(halffryomlete)

 function tea( suger, milk)
 {
    let cooked = suger + milk +3;
 return cooked;}
 let response = tea (2,3)
 console.log(response)

 let juice =  ()=>  1+1.5+3;
 let responses:number 
 console.log(response)


















