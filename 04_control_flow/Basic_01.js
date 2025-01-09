// There are mainly two operator which is used in javascript 

/*
==  => losely type operator
=== => strictly type operator
*/

const num=2;

// if(2=='2'){
//     console.log("That statement is right");   
// }
// else{
//     console.log("That statement is not right");
    
// }

// ===========================================================================================

// if(2 ==='2'){
//     console.log("That statement is right");   
// }
// else{
//     console.log("That statement is not right");
    
// }

// =========================================================================================

// let Isprice=500;

// if(1000<Isprice){
//     console.log("that is 1000 rupees");   
// }
// else if(Isprice==800){
//     console.log("that is Eight gundred rupees");   
// }
// else{
//     console.log("that is 500 hundred rupees");  
// }


// +++++++++++++++++++++++++++++++ Special case of if else condition +++++++++++++++++++++++++++++


const val=null;

if(null>0) console.log("true1");

if(null<0) console.log("true2");

if(null>=0) console.log("true3");

// reason :
/*
equality check and comparison operator work differently comparison operator convert null 
into 0  but equality not convert this value into number that reason null >= 0 gives
true and other gives false
*/ 


