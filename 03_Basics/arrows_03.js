
// const ob={
//     name:"sparsh",
//     age:18,
//     myfun:function(){
// // " this " => ek keyword hota hai jisko current context keyword kahata hai
//         console.log(`my name is ${this.name}`);
//         // console.log(this);
        
        
//     }
// }

// ob.myfun();
// ob.name="aditya";
// ob.myfun();

// console.log(this);  // Empty object


// ====================================Arrow function ================================



// const myfun=()=>{
//     console.log("Radhe Radhe");   
// }
// myfun();


// const myfun=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(myfun(4,8));

// Immplecitly Arrow function
// const myfun=(num1,num2)=> (num1+num2);

// let st=myfun(5,5);
// console.log(st);



// =============================================================================================

// Immediate Innovation function Execution

// const myfun=()=>{
//    console.log("my name is sparsh kashyap");   
// }
// myfun();


(function myfun(){
    // named IIFE
    console.log("my name is sparsh kashyap");  
})();



(()=>{
    // without named IIFE
    console.log("my name is sparsh kashyap");  
})();


((name)=>{
    //parameter IIFE
    console.log(`my name is ${name} kashyap`);  
})("sparsh");


