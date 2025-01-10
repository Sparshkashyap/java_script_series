/// Reduce

//+++++++++++++++++++++++++++++++++++++Array+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr=[1,2,3,4,5];

const totalsum=arr.reduce((acc,currentsum)=> acc+currentsum,0);

// console.log(totalsum);



// +++++++++++++++++++++++++++++++++++++Object+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const ob=[
//     {
//         name:"java_script",
//         price:1999
//     },
//     {
//         name:"ML",
//         price:2999
//     },
//     {
//         name:"C++",
//         price:3999
//     }
// ];

// const ar=ob.reduce((acc,currentsum)=> {acc+currentsum.price,0);

// console.log(ar);

// const arr1=[1,2,3,4,5,6];

// const new_arr=arr.reduce(function (acc,sum){

//    console.log(`The value of acc ${acc} and sum is ${sum}`)
//    return sum+acc

// },0);

// console.log(new_arr);
