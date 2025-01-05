// =============================Objects=========================================

// singlton class 

/* prototype is a concept which is exist in java_script ka andar Objects mai paya 
jata hai similar to a inheritance ki tarah hota hai .
Object ka prototype banata hai 
*/


// let teacher={
//     fun:function(){
//         return "The Teacher is just like a mirror of the world" ;
//     },
//     cast:"sharma" 
    
// }

// let student=Object.create(teacher);

// console.log(student.fun());
// console.log(student["cast"]);
// console.log(student.cast);

// ==================================================================================
// Object literals

let dic={
    name:"sparsh",
    Email:"sparshkashyap655@gmail.com",
    isLoggedin:false,
    "dog":"Labra"

}

// console.log(dic.name);
// console.log(dic[Email]); // This line give Error
// console.log(dic["Email"]);
// console.log(dic."dog"); // Syntax Error

dic.Email="sparshkashyap666@gmail.com";

// Object.freeze(dic);

dic.isLoggedin=true;
dic.Email="sparshkashyap999@gmail.com";

// console.log(dic);

dic.greet=function(){
    console.log("The Teacher is a mirror of the world");
    
}

// console.log(dic.greet());

dic.greetTwo=function(){

    // console.log(`My name is ${this.name} kashyap`);// Variable interpolation
    
}

console.log(dic.greetTwo());


// ===================================================================================

const ob=new Object();

console.log(ob);












