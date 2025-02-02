
// let d=new Date();
// console.log(d);
// console.log("The Date is:"+d.getDate());
// console.log("The Time is:"+d.getTime());
// console.log("The Year is:"+d.getFullYear());
// console.log("The Month is:"+d.getMonth());
// console.log("The hours is:"+d.getHours());
// console.log("The Mintues is:"+d.getMinutes());
// console.log("The Seconds is:"+d.getSeconds());
// console.log("The Seconds is:"+d.getMilliseconds());


// let customdate =new Date("10/09/2004");
// console.log(customdate.toDateString());

let weeeks=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]
let months=["Jan","Feb","March","Aprail","May","June","July","Agust","Sep","Oct","Nov","Dec"]


function checkdate()
{
    let a=document.getElementById('input').value;
    let val=new Date(a);


    console.log("The Date is :) "+val.getDate());
    // console.log("Month :)"+((val.getMonth())+1)+"=>"+months[val.getMonth()]);
    // console.log(val.getDate());
    // console.log(val.getFullYear());
    

}

function  checkMonth(){

    let month=document.getElementById('input').value;
    let m=new Date(month);    
    console.log("The Month is :)"+((m.getMonth())+1)+ " => "+months[(m.getMonth())]);
    

    
}
function  checkTime(){
    let Time=document.getElementById('input').value;
    let m=new Date(Time);    
    console.log("The Time is :) "+m.toLocaleTimeString());

}

function  checkDay(){
    let Time=document.getElementById('input').value;
    let m=new Date(Time);    
    console.log("The Day is :) "+weeeks[(m.getDay())]);

}
function  checkyear(){
    let Time=document.getElementById('input').value;
    let m=new Date(Time);    
    console.log("The Year is :) "+m.getFullYear());

}

function  checkage(){
    let Time=document.getElementById('age').value;
    let m=new Date(Time);    
    let cr=new Date();

    let total=cr.getFullYear()-m.getFullYear();
    console.log("The age is :) "+total);
    

}