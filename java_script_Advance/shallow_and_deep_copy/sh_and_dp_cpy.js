
import _ from 'lodash';

/**
=> Shallow copy ek object sai dusra object mai properties copy karna ko kaha hai ta hai
but shallow mai kaval top-level ki hi proerties aur method copy hota hai nested object ya
method copy nhi hota hai
*/

/*
=> Deep copy mai ek object sai dusra obj mai nested properties bhi copy ki ja sakti hai
but kaval nested obj hi copy kiya ja sakta hai function ya array nhi 
Syntax : let newobj = JSON.parse(JSON.stringify(obj))

solution :
use : lodash cdn ka use karka Each object can be copy to the another obj

Syntax : let newobj = _.cloneDeep(obj);
 */



let obj={
    name:"sparsh",
    age:10,
    myfun:function(){
        return "I am a function";
    },
    address:{
        city:"saharanpur",
        location:"bhim ki dairy",
        country:"India"
    },
    myfun:function(){
        return "This is a obj function";
    }
}

//  Shallow copy
// let user=Object.assign({},obj);
// let user={...obj}
// user.name="aditya";
// // user.address.city="Mathura";  => solution using deep copy
// user.age=21;

// console.log(obj);
// console.log(user);



// Deep copy

// let user=JSON.parse(JSON.stringify(obj));
// user.name="Aditya";
// user.age=35;
// user.address.city="Mathura";

// console.log("This is a orignal obj:",obj);
// console.log("This is a user obj:",user);  =? function is not show solution : lodash cdn



let user=_.cloneDeep(obj);
user.name="Aditya";
user.age=35;
user.address.city="Mathura";

console.log("This is a orignal obj:",obj);
console.log("This is a orignal obj:",user);