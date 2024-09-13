// #1 Primtive datatype

// 7 types : String, Number, Boolean, null, 
//            undefined , Symbol, BigInt

// Get Copy of : (Primtive datatype) ,  (Storage: Stack)
// Get Reference of : ( Non primitive datatype ) , ( Storage : Heap ): Array, Objects , function

// Mater in javascript -> Objects and Borwer web events.
//JavaScript is dynamically typed, meaning that the type of a variable is determined at runtime, not at compile-time. You don't need to specify the data type of a variable when you declare it, and a variable's type can change as the program runs. For example:
let x = 5;       // x is a number
x = "hello";     // now x is a string
console.log(x);
//In JavaScript, you can assign different types to the same variable without needing to declare a new one, which is characteristic of dynamically typed languages.



const score = 100
const scoreValue = 100.3

const isLoggedIn =  false;
const outsideTemp =null;
let userEmail; // let userEmail = undefined  both are same 


let id = "Gaurav";
let id2 = id;
id2 = "Gaurav Ahuja" ;
console.log(id +' Part 1');
id = "Aman"
console.log(id+' Part 2');
console.log(id2);
