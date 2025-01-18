

let b=document.getElementById('banner');

// b.innerText="sparsh kashyap";
// console.log(banne.children.innerText);



setInterval(function(){
    // console.log(date.toLocaleTimeString());
    let date=new Date();
    let sh=date.toLocaleTimeString();
    b.innerText=sh;

},1000);









