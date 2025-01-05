// Nested Objects
const regular_user={
    user:{
        user_name:{
            first_name:"sparsh",
            last_name:"kashyap",
            new_ob:{

                name:"Sparsh"
                
            }

        }
    }
}

// console.log(regular_user);

// console.log(regular_user.user.user_name.first_name);

const  ob1 ={
    name:"sparsh",
    id:63,
    Email:"sparshkashyap655@gmail.com"

}


// console.log(Object.entries(ob1));

// console.log(Object.keys(ob1));

// console.log(Object.values(ob1));

const arr=[
    {1:"A",2:"B",3:"C"},
    {1:"a",2:"b",3:"c"},
    {"sp":"sparsh"}
]

// console.log(typeof arr[0]);
// console.log(arr[1][1]);



const obj={
    course_name:"javascript",
    price:999,
    course_duration:"6Month"
}

// console.log(obj.course_name);
// console.log(obj.course_name);
// console.log(obj.course_name);

// ============ Destructuring ==================

const {course_name:CN}=obj;

console.log(CN);
console.log(CN);
console.log(CN);


// ========================== JSON (javascript Object Notation)==========================

// {
//     "name":"sparsh",
//     "age":18,
//     "city":"saharanpur"
//     arr:[1,2,3]
// }














