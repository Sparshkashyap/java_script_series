/*
=> Promises is a special object in the javascript which is used with async keyword

=>Asynchrononition means : something which is happen in the future is called async

=>we use Promise constructor to build the object of the promise class 

=>There are two function resolve and reject which we can use 

=> and also jab resolve ya reject kuch output provid karata hai then usko
then and catch keyword sai manage kiya jata hai.

 */



// let mypromise = new Promise(function(resolve,reject){
//     // let condition="https://jsonplaceholder.typicode.com/users";
//     let condition=true;
//     if(condition){
//         resolve("Sucessfully completed the API call ✅")
//         resolve(condition);
//     }
//     else{
//         reject("Due to Some Error call Is Failed ❌")
//     }
// })


// mypromise.then(function (val){

//     console.log(val);
    
// })
// .catch(function(val){
//     console.log(val);




// let xhr=new XMLHttpRequest();
// xhr.open('Get','data.xml',true);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // Response ko process karein
//       console.log(xhr.responseText);
//     }
//   };
//   xhr.send();



// XML Request ka liye ................

//   let xhr = new XMLHttpRequest();
// // console.log('XMLHttpRequest object created');

// xhr.onreadystatechange = function() {
//   console.log('ReadyState:', xhr.readyState);
//   if (xhr.readyState === 4) {
//     console.log('Status:', xhr.status);
//     if (xhr.status === 200) {
//       console.log('Response:', xhr.responseText);
//       // Process the response here
//     } else {
//       console.error('Request failed with status:', xhr.status);
//     }
//   }
// };

// xhr.open('GET', 'data.xml', true);
// xhr.send();



// Fetch request 

fetch("https://jsonplaceholder.typicode.com/user")
.then((ch)=>{
    if(!ch.ok){
        throw new console.log("Network issue Error is occur 😑");
         
    }
    return ch.json();
})
.then((data)=>{
    console.log(data);
    console.log(data[0].email);
    
    console.log("API request is successfully completed ✅");
    
    
})
.catch((ch)=>{
    console.log("Error is occur ➡️",ch);
    
})