/*
Frequently asked question 
*/

// what is Destructureing :


// let x=50;
// let y=100;
// [x,y]=[y,x];
// console.log(x,y);


// How we can reduce the length of the array

// let arr=[1,2,1,1,25,1,5,4,54,2,3];
// arr.length=4;
// console.log(arr);


// How we can achieve only unique element exist in the array

// let set=new Set(arr);
// console.log([...set]);
// // console.log(typeof [...set]);


// how we can sum all the element in the array

// let arr=[1,2,5,5,6];
// let sum=arr.reduce(((x,y)=>x+y),1.2);
// console.log(sum);


//  trick

// let x=10;
// let y=200;
// x=(x++,x);   // return 20 value of y
// console.log(x);


//  var is global scope that why It print the value 3 for 3 times
// for(var i=0; i<3; i++){
//     setTimeout(()=>console.log("the =>"+i),1);
// }


// If we add the +operator in any tag then kya hoga

// let a=+true;
// console.log(a);
// console.log(typeof a);


// 

// let a=10;
// let b=new Number(10);

// console.log(a==b); // lossely conversion
// console.log(a===b); // hardcoded conversion

// console.log(typeof a);
// console.log(typeof b);



// use of eval function 

// let a=eval('10+20+30+5');
// let b=eval('[1,2,3,4,5]');
// console.log(a);
// console.log(typeof b);

// hasownproperty

// const ob={
//     name:"sparsh",
//     age:10
// }

// let a=ob.hasOwnProperty("name");
// let b=ob.hasOwnProperty("city");
// console.log(b);
// console.log(a);


// 

// function sayhi(){
//     return (()=>0);

// }

// console.log(typeof sayhi());
// console.log(typeof sayhi()());
// console.log(sayhi()());

// 

// console.log(typeof typeof 1);

// //
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!1);


//

// console.log(setInterval(()=>console.log("sparsh"),0));


// speread operator

// console.log([..."sparsh"]);

// console.log(true+ +"100");
