
const user={
    student:{
        name:"sparsh",
        age:20,


    }
}


console.log((null || undefined)?? 'NotExist');
console.log(user.student.name ?? 'NotExist');
console.log(user.student.age ?? 'NotExist');
