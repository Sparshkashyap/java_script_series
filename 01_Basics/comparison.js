
// console.log(2>0);
// console.log(2<0);
// console.log(2>=0);

// ================ tricky comparison ============================================

console.log(null>0);
console.log(null<0);
console.log(null>=0);
console.log(null==0);


/* reason: Equality and comparison work as a diffrently  because comparison convert
null to a number the value of null is 0 
isliye null>0 // false
       null<0 //false
       null>=0 //true
*/

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined);


