/*
=> Short hand properties in object
=> looping in the object
=> sum of all the object
=> what is object
// Object is a collection of related data.
// In the same object we can store the different type of value
// In the object we store the data in the form key and value
*/

// create the object

let person=new Object();

person.name="sparsh",
person.color="black",
person.myfun=function(){
    return "speaking"
}


// console.warn(person);





let key="location" //=> short hand properteis in the object

email="sparshkashyap655@gmail.com"
pnone_no=6397426613

const user={
    name:"sparsh",
    age:10,
    city:"saharanpur",
    email,
    [key]:"GLA University",
    myfun:function(){
        return this.address;
    },
    pnone_no
}

user.name="aditya";
user.age=20;
user.address="Hakikat Nagar saket colony";

// console.log("name" in user);                     check Element is present or not

// delete user.location;

// for(key in user){
//     console.log(`${key} => ${user[key]}`);
    
// }




// let count=0;
// const money={
//     a:10,
//     b:20,
//     c:50
// }

// for(key in money){
//     count+=money[key];
// }

// console.log("The sum of money is:",count);





