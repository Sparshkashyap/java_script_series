
/**
 => Generating function ko yield keyword ka sath use karta hai to 
 => why > Interpreter ko apna hidsab sai execute karna ka liye
 */



// function* myfun(){
//     console.log("sparsh kashyap");
//     let x=10;
//     yield x; 
//     yield "Aditya";
//     let y=50;
//     yield y;
//     yield 40;


    
// }


// let s=myfun();

// console.log(s.next().value);
// console.log(s.next().value);
// console.log(s.next().value);
// console.log(s.next().value);


function* randomId(){
    let count=0;
    while(true){
    count++;
    yield count;
    }
    
};


let s=randomId();

let show=document.getElementById('show');

document.getElementById('btn').onclick=()=>{


    show.innerText=s.next().value;
    
    
    
}

// console.log(s.next());
