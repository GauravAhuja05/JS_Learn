console.log("Hey Gaurav");

let email = "GauravA945@gmail.com";
var name = "Gaurav"
let NewFilename

/*
preffer not to use var
because of issue in block scope  and fuctional scope

Output will be 

Hey Gaurav
┌─────────┬────────────────────────┐
│ (index) │ Values                 │
├─────────┼────────────────────────┤
│ 0       │ 'GauravA945@gmail.com' │
│ 1       │ 'Gaurav'               │
│ 2       │ undefined              │
└─────────┴────────────────────────┘
*/

console.table([email, name, NewFilename])