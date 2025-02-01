/*
=> map ki performance better hoti hai object sai because 
object costly operation perform karta hai
=> map similar to object hota hai par advance level ka hota hai
=> object mai key always string consider hoti hai par map mai key ka datatype
different hota hai


*/


const obj={
    name:"sparsh",
    age:20,
    10:"The type of key is Integer"
}

// console.log(obj.10);
// console.log(obj[10]);


let mp=new Map([['name','sparsh'],[true,'Aditya'],["age",20],[()=>{},"This is a function"]]

);

// console.log(mp.get("name"));  // key ka through value get karna ka liye.

// console.log(mp.keys());      // all keys access karna ka liye.

// console.log(mp.values());    // all values access karna ka liye

// console.log(mp.has("nam"));  // Element present or not

// console.log(mp.size);        // Find the length of the map

// console.log(mp.delete(true));  // Delete any Key in the object

// console.log(mp.entries());     // Print all the entries 


// mp.forEach((val,key)=>{      
//     console.log(key+"->"+val);
// })


// const lis=[1,2,3,4,5];
// const list=lis.map((e)=>{
//    return e*5
// })
// 
// console.log(list);


// for([x,y] of mp){
//     // console.log("The keys are:"+x);
//     console.log("The values are:"+y);    
    
// }


// mp.set("city","saharanpur");


// obj.city="saharanpur";

console.log(obj);















