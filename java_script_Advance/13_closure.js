/*
=>Lexical scope is determined by the code structure at compile time,
while dynamic scope is determined by the call stack at runtime.
*/

// let a=10; // global scope

// function myfun(){

//     let val=20;  // local scope

// }

// myfun();
// console.log(val);

// THAT IS NORMAL FUNCTION CALLING

// function outer(){
//     let val=20;
//     function inner(){
//         return val;
//     }

//     return inner()
// }

// let res=outer();
// console.log(res);

// FUNCTION WITH LEXICAL SCOPE IS CALLED => CLOSURE

// let k = 20; // global scope
// function parent() {
//   let ren = 999; //local scope
//   return function outer() {
//     let val = 100;   // function with scope varible => lexicalscope
//     let a = ren;
//     return function inner() {
//         let a=5;
//         ren=10;
//         let u=k;
//       return u;
//     };
//   };
// }

// let upper=parent();

// let p = upper();

// let l = p();

// console.log(l);


// let st="sparsh kashyap is a student of GLA";
// console.log(st.split('').reverse().join(""));




