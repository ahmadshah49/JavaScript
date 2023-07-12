// function myFunc2(name) {
//     console.log("ahmad");
//     console.log(`MY NAME is ${name}`);
// }
// function myFunc(callback) {
//     console.log("Hello World");
//     callback("raza")
// }
// myFunc(myFunc2)




// function myfunc(callback) {
//     console.log("Hello World");
//     console.log("Ahmad");
//     callback("raza")
// }
// function myfunc2(name) {
//     console.log("inside Myfunc2");
//     console.log(`My Name is ${name}`);
// }
// myfunc(myfunc2)


//   not correct
function myFunc(callback) {
    callback("Ahmad","raza")
    callback("raza")
}
function myFunc2(firstName,lastName) {
console.log(`My First Name is${firstName}`);
// console.log(`My last Name is${lastName}`);
    
}
myFunc(myFunc2)
