// function myfunc() {
//     function myfunc2() {
//         return "hello World"
//     }
//     return myfunc2
// }
// const func=myfunc()
// console.log(func);



function myfunc() {
    function myfunc2() {
        return "Hello World"
    }
    return myfunc2()
}
const func=myfunc()
console.log(func);