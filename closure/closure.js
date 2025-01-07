
function outerfunction(){

    let name="radhe radhe";

    function innerfunction(){
        console.log(name);
    }

    return innerfunction;
}


let myclosure=outerfunction();
myclosure()
// console.log(myclosure());

