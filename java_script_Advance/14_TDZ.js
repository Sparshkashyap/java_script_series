
/*
=> Temporal dead zone realatd on hoisting 
TDZ ka start hona sai phele kuch bhi Execute kiya ja sakta hai
But start hona ka bad Nothing will be execute .

TDZ concept ko kaval let aur const sai explain kiya jata hai.
*/




let b=200;
console.log(b);
// Temporal Dead Zone start here ..............


console.log(a);

let a; // TDZ Continue.......





