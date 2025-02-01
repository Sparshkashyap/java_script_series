
const cache={};
function calculate(a,b){
    let res=(a+b)*(a*b)*(a*b)*(a*a);
    console.log("The calculate result is :"+res);
    return res;
    
}

function memory(a,b){
    let key=a+":"+b;
    if(!cache[key]){
        let res=calculate(a,b);
        cache[key]=res;
        console.log("The cache memory result :"+cache[key]);
        return cache[key];
    }
    else{
        console.log("The cache memory result :"+cache[key]);
        return cache[key];
    }

}