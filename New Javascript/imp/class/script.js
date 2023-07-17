class userdata{
    constructor(name,age,email,adress){
        this.name=name;
        this.age=age;
        this.email=email;
        this.adress=adress;
    }
    about(){
        return `user name is ${this.name} user age is ${this.age}`
    };
    is18(){
        return this.age>=18
    }
    sing(){
        return "blwhjidjfhdsflhjdlfkj"
    }
    hello(){
     return "hello"
    }
}
// function userdata(name,age,email,adress) {
//     this.name=name;
//     this.age=age;
//     this.email=email;
//     this.adress=adress;
    
// }
// userdata.prototype.about= function(){
//             return `user name is ${this.name} user age is ${this.age}`
//         };
// userdata.prototype.is18=function(){
//             return this.age>=18
//         };
// userdata.prototype.sing=function(){
//             return "blwhjidjfhdsflhjdlfkj"
//         };
const user1=new userdata("Ahmad raza",18,'@gmail',"line2")
console.log(user1);
const about=user1.about
console.log(user1.about());
console.log(user1.hello());




























