let name="radheradhe";

function outerfunction(){

    let name="radhe radhe";

    function innerfunction(){
        console.log(name);
    }

    return innerfunction; // function reference
}


let myclosure=outerfunction();
// myclosure()
console.log(myclosure);

