// function info() {
//     console.log(`person Name Is ${this.name} person Age Is ${this.age}` );
// }
// const person1={
//     name:"ahmad",
//     age:18,
//     about:info
// }
// const person2={
//     name:"Tayyab",
//     age:20,
//     about:info
// }
// const person3={
//     name:"Abdullah",
//     age:17,
//     about:info
// }
// person1.about()
// person2.about()
// person3.about()

function info() {
    console.log(`Person Name Is ${this.FName} Person Age Is ${this.age}`);
}
const person1={
    FName:"Ahamd",
    age:18,
    about:info
}
const person2={
    FName:"Tayyab",
    age:2,
    about:info
}
const person3={
    FName:"Abdullah",
    age:17,
    about:info
}
person1.about()
person2.about()
person3.about()