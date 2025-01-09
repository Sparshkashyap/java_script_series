
// function myfun(){
//     console.log(" Radhe Radhe");
    
// }

// myfun()


// function myfun(username){
//     let st=`${username} is a good Human Being`; // variable interpolation
//     return st;
// }


// const res=myfun("sparsh kashyap");
// console.log(res);

// function myfun(num1,num2){ // parameters
//     let res=num1+num2;
//     return res;
// }

// let result=myfun(5,5); // argument
// console.log(result);

// Rest operator => "..."
// function addNum(...array){
//     let sum=0;
//     let lis=array;
//     for( let i=0; i<lis.length; i++){ 
    
//         sum+=lis[i];
//     }

//     return sum;

// }


// let res=addNum(10,20,30);
// console.log(res);


// function addNum(num1,num2,...array){
//     let sum=0;
//     let lis=array;
//     for( let i=0; i<lis.length; i++){ 
    
//         sum+=lis[i];
//     }
//   console.log(lis);
//   console.log(num1,num2);
  
  
//     return sum;

// }


// let res=addNum(10,20,30,40);
// console.log(res);


// const ob={
//     username:"sparsh",
//     age:18
// }

// function myfun(get_Object){
//     let res=`The Candidate name is ${get_Object.username} and age is ${get_Object.agr}`;
//     return res;
// }


// let st=myfun(ob);
// console.log(st);




// const array=[1,2,3,4,5,6];

// function myfun(myarray){
//     return myarray[4];

// }


// let res=myfun(array);
// console.log(res);



function myfun(){
    let val=110;
    console.log(this);
    // console.log(this.val);
    console.log(val);  
    
}

myfun()