//let score = 33; // will get a number
// let score = "33abc"; //will get NaN
// let score ="Gaurav Ahuja";//will get NaN
let score =undefined;//will get NaN

/*
Notes : 
33 =>  33
33abc => NaN
true => 1 , false => 0
undefined => NaN
*/ 

let valueNumber = Number(score);

console.log(typeof score);
console.log(typeof valueNumber);
console.log(valueNumber);


console.log("--\n------------");

let isBolean ="Gaurav";
let BoleanIsLogedin = Boolean(isBolean);

console.log(BoleanIsLogedin);
console.log(typeof BoleanIsLogedin);




/**
 * Notes:  
 * -----------------
 *  1 => true, 0 => false
 * "" =>  false
 * "Gaurav" => true
 * 
 */


// ********************OPERATIONS********************