// Itreate Objects
// for in loop
// const fruits={name:"Apple",rate:"1.5$/kg"}
// console.log(fruits);
// for(let fruit in fruits){
// // console.log(fruits[fruit]);
// console.log(fruit,fruits[fruit]);
// }

const persons={name:"Ahmad",age:"18years"}
// for(person in persons){
//     console.log(person,persons[person]);
// }


// oject.keys

// console.log(Object.keys(persons));
// for(let key of Object.keys(persons)){
//     // console.log(persons[key]);
//     console.log(key,persons[key]);
// }
for(key of Object.keys(persons)){
    console.log(key,persons[key]);
}
