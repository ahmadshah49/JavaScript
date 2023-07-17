// const userMethods={
//     about:function() {
//         return `This is UserName${this.firstName}And This Is Her Age ${this.age}`
//     },
//     is18:function () {
//         return this.age>=18 
//     }
// }

// function userdata(firstName,lastName,age,email,adress) {
//     const user=Object.create(userMethods)
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age
//     user.email=email
//     user.adress=adress
//     return user
// }
// const user1=userdata('ahmad','raza',17,"@gmail","street2")
// console.log(user1);
// const about=(user1.about())
// const is18=(user1.is18())
// console.log(about);
// console.log(is18);

// userMethods={
//     about:function(){
//         return `user name is${this.name} user age is${this.age}`
//     },
//     is18:function(){
//         return this.age>=18
//     },
//     sing:function(){
//         return "blwhjidjfhdsflhjdlfkj"
//     }
// }
function userdata(name,age,email,adress) {
    this.name=name;
    this.age=age;
    this.email=email;
    this.adress=adress;
    
}
userdata.prototype.about= function(){
            return `user name is ${this.name} user age is ${this.age}`
        };
userdata.prototype.is18=function(){
            return this.age>=18
        };
userdata.prototype.sing=function(){
            return "blwhjidjfhdsflhjdlfkj"
        };
const user1=new userdata("Ahmad raza",18,'@gmail',"line2")
console.log(user1);
const about=user1.about
console.log(user1.about());




























