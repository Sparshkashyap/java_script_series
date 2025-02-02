/**
=> Set is a collection of unique Element which is any datatype.
*/

// let data=new Set([1,2,3,4,5,5,4,4,4,4,4,2,1]);
// console.log(data);

// array to set conversion

// let arr=[1,2,3,4,"sparsh",true,12.54,12.54,2,1,"sparsh"];
// let set =new Set(arr);

// console.log(arr);
// console.log(set);


// set to array conversion 

// let si=new Set([1,2,3,4,5,5,6,7,8,8]);
// let arr=[...si];

// console.log(si);
// console.log(arr);


let set= new Set([1,2,3,4,5,"sparsh","aditya",5,6,7,7,8,9]);

set.delete("sparsh");
set.delete(1);

set.clear();

set.add("sparsh")
set.add("aditya")
set.add("raghu")
set.add("Raman")

// console.log(set.size);
// console.log(set);

// for(item of set){
//     console.log(item);
    
// }


// set.forEach((item)=>{
//     console.log(item);
// })
