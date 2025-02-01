
// Why should we use let instead of var
/*

=>var ko redeclare kar sakte hai.
=> var ko block level scope ka bhar nhi access kar sakte hai.
=> var hamesha memory mai store raha ta hai ek bar create kar na ka bad.
=> var window object ka through access kiya ja sakta hai.

=> let ko redeclare nhi kar sakte.
=> let ko block level scope ka bhar acccess nhi kar sakte.
=>let  block level scope ka andar tak hi access bhar ana par block sai let ki power katam
=> let window object ka through access nhi kiya ja sakta


*/

var x=10;
if(true){
    let val=20;
    var x=200; 
    val=200; //Reinitialization ✅ // Redeclaration ❌
    console.log("The value of var :"+x);
    console.log("The value of var :"+val);
}
let val=20;
console.log("The value of let "+val);
console.log("The value of var "+x);

