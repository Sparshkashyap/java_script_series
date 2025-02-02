/**
=> Call method takes argument seperately
=> apply method takes argument as an array
=> bind method used to binding the element ek ka element dusra object mai
bind kar deta hai

*/


let student={

    Firstname:"sparsh",
    Lastname:"kashyap",
    age:20,
    // myfun:function(city,country){

    //     return `The name is ${this.Firstname} ${this.Lastname} and The city is ${city} and The country is ${country}`; //for apply


    // }
    // myfun:function(){

    //     return `Name is ${this.Firstname} ${this.Lastname}`; // for bind 

    // }
    
}


let teacher={

    Firstname:"Divyanshu",
    Lastname:"kandalwal",
    age:20

}




// console.log(myfun.call(teacher)); Example of call

// console.log(student.myfun.apply(teacher,["Saharanpur","India"])); Example of apply

// let Fullname=student.myfun.bind(teacher);
// console.log(Fullname());

