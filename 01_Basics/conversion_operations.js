let number=12;
let st="156"
let declarative_sentence=true

// console.table([typeof number,typeof st,typeof declarative_sentence]);
// ====================================================
let new_st=Number(st);
// console.log( typeof new_st); // number
//=====================================================
let p_num="25abc";
let new_p_num=Number(p_num);
// console.log(new_p_num) // NaN => Not a Number
// ====================================================
let nam="sparsh";
let new_name=Boolean(nam);
// console.log( typeof new_name);
// =====================================================

let k=156;
let new_k=String(k);
// console.log( typeof new_k);

// =======================================================
let l=null;
// console.log( typeof Number(l));



// =========================================operations======================================

let num=5;
let new_num=-num;
console.log(new_num);

console.log(2+2); //4 
console.log(2*2); //4
console.log(5/2); //2.5
console.log(5%3); //2
console.log(2**5); //32


// ==================tricky operations=====================

console.log("1"+2);//12
console.log(1+"2"); //12
console.log("1"+"2");//12
console.log("1"+2+3);//123
console.log(1+2+"3");//33

console.log(+true);//1
console.log(+"");//0


let gamecounter=100;
gamecounter++;
console.log(gamecounter);//101 





















