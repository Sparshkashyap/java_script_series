console.log("hello duniya");


const accountId=145245
let accountEmail="sparshkashyap655@gmail.com"
var accountPassword="12345"
accountcity="jaipur"
let temp;

/*
Prefer not use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword]);
accountEmail="sparshkashyap666@gmail.com"
accountPassword="54321"
// accountId=1654


// console.log(accountId); this give me TypeError
console.table([accountId,accountEmail,accountPassword,temp]);
console.log("hello world")

console.log("sparsh kashyap");
