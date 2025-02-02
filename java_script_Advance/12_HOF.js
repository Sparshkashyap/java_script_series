/*
=> HOF (High order function)
=> If the function A take a argument as another function B then function A is called
HOF
=> If function A return the another fuction B then function A is called as HOF
=> map , filter ,reduce, some, every,all these are HOF
*/


// function myfun(){
//     return "I am a myfun";

// }

// function getfun(x){

//     // console.log(x(this));
//     return x();
    
// }

// const val=getfun(myfun); // HOF
// console.log(val);




// let arr=[1,2,3,4,5,6];
// let arrow=(item)=>{
//     return item*100;
// }

// let list=arr.map(arrow);
// console.log(list);




// let arr=[1,2,3,4,5,10];
// let list=arr.some((item)=>{
//     return item<5;
// })
// console.log(list);




// let arr=[1,2,3,4,5];
// Array.prototype.myfun=function(x){  
//     console.log(x(10));
//     return 20;
// }
// let list=arr.myfun((item)=> item*20);
// console.log(list);




// let arr=2;
// Number.prototype.myfun=function(val){
//     return val(this);
// }
// let list =arr.myfun((item)=>item*10);
// console.log(list);



// currying function technique

// function mytop(x){
//     return function lower(y){
//         return x*y;
//     }
// }

// let res=mytop(12);
// let finalres=res(10);
// console.log(finalres);


var age=10;

let name="sparsh"
