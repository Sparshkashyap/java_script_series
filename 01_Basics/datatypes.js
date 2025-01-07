"use strict" // treat all js code as newer version 

// alert(3+3); we are using node js , not browser

console.log(3
    +3
); //code readability should be High

let name="sparsh";
let age=18;
let isloggedIn=false;

// number => 2 to power 53 
// bigint
// string  => ""
// boolean =>true/false
// null => standalone value
// undefined
//symbol => unique

// console.log(typeof undefined);// undefined

// console.log(typeof null);//object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Reference)

//primitive data types are stored in stack

let a=10;
new_a=a;
console.log(new_a);

// Non primitive data types are stored in Heap 

let Email=function(){
    console.log("radhe radhe");
    
};
new_Email=Email;
// console.log(new_Email);



