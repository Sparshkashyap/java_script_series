class proper{
    name="sparsh kashyap";
    age=20;
    #pin=639742;
    #getfun(){
        return this.pin;
    } 

    getspecialfun(){
        return {
            name:this.name,
            age:this.age,
            pin:this.#pin,
            myfun:this.#getfun
        }
    }
}


const ob = new proper();

console.log(ob.getspecialfun());
