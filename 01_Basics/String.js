// ==============================================String methods =======================

const new_st="sparsh kashyap";
const age=18;

console.log(`My name is ${new_st} and my age is ${age}`); // we should follow this syntax
// to join the string


const st =new String("sparshkashyap");
console.log(st);


console.log(st.__proto__); // {} object


let removespace="      radhe radhe     ";
console.log(removespace.trim());


let split_name="sparsh-kashyap-dassa-Radha-rani-ji";
console.log(split_name.split('-'));


let substring=st.substring(0,5);
console.log(substring);


console.log(st.length);



let Email="sparshkashyap666@gamil.com";
console.log(Email.replace('666','655'));


let num="2+2";
console.log(eval(num)); // string primitive datatype



// eval use to remove the Quates
let new_num=new String("2+2");
console.log(eval(new_num)); // string object


let st1=new String("10+100");
console.log(typeof (st1.valueOf())); // convert String object -> primitive String datatype
console.log(eval(st1.valueOf()));

let index="sparshkashyap";
console.log(index.indexOf('k'));


let character="sparshkashyap";
console.log(character.charAt(5));

let sl="sparshkashyap";
console.log(sl.slice(-14,-1));


let lwcase="sparshkashyap";
console.log(lwcase.toUpperCase());
console.log(lwcase.toLowerCase());



let number=58;

console.log(typeof number.toString());


let str="My name Is Spasrh Kashyap";
let regex=/[A-Z]/g;
let found=str.match(regex);
console.log(found);











