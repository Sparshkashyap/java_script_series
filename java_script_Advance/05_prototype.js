/**
 => Prototypes are mechanism which are used in javascript to inheriate the property from one object to another object.
=> In JavaScript, a prototype is an object that allows other objects to inherit its properties and methods.

 */

Object.prototype.val="This is a new way to create a prototype";

Object.prototype.myfun=function(){

    return "This is a function";

}

String.prototype.address="GLA University";
String.prototype.Customlen=function(){
    return this.length+100;
}


let user={

    getfun:function(){

        return this.name+" "+this.Lname;
    },
    getAge:function(){
        let age=new Date().getFullYear()-this.birth;
        return age;
    }

}


let teacher={
    name:"Divyanshu",
    Lname:"Khandalwal",
    birth:1978,
    // getAge:user.getAge
}
let student={
    name:"sparsh",
    Lname:"kashyap",
    birth:2004,
    // getAge:user.getAge  
    
}

// teacher.__proto__=user;
// student.__proto__=user;

// console.log(teacher.getAge());
// console.log(student.getAge());




