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

// console.log(dic.greetTwo());


// ===================================================================================

const ob=new Object();
// console.log(ob); // null object


// const ob1={};

// ob1.name="sparsh";
// ob1.id=12;
// ob1.Email="sparshkashyap655gmail.com"

// console.log(ob1);

// concatenate the Objects
const ob1={1:"a",2:"b",3:"c"};
const ob2={4:"d",5:"e",6:"f"};

// console.log(ob1,ob2);
// console.log({ob1,ob2});

const new_ob=Object.assign({},ob1,ob2);
// console.log(new_ob);

const new_ob1=Object.assign({...ob1,...ob2});
// console.log(new_ob1);

// check the element is exist or not

// console.log(new_ob1.hasOwnProperty(25));

// console.log(new_ob1.__proto__);




























