// lexical Scope
var myvar="myvar1"

const func=()=>{
    function func2() {
        console.log(`My War 1 Value ${myvar}`);
    } 
    func2()
}
console.log(func());