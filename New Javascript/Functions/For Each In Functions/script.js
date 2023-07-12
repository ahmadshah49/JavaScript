// // function myfunc(number,index) {
// const numbers=[1,2,3,4]
// //     console.log(`number multiply by Two,${number*2} index is ${index}`);
// // }
// // numbers.forEach(myfunc)

const numbers=[
    {firstname: "ahmad" , age:18},
    {firstname: "raza" , age:158},
    {firstname: "Bilal" , age:11},
    {firstname: "Haris" , age:22}
]
numbers.forEach((user,index)=>{
    console.log(user.firstname,user.age,index);
})

console.log("With Name Or Index Number");

numbers.forEach((users,index)=>{
    console.log(users.firstname,index);
})