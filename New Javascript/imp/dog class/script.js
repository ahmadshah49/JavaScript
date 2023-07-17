// class dog{
//     constructor(name,age){
//         this.name=name
//         this.age= age
//     }
//     iscute(){
//         return this.age <=1;
//     }
// }
// const dog1=new dog("tomy",1)
// console.log(dog1);
// console.log(dog1.iscute());


// animals
class animal{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    iscute(){
        return this.age<=1;
    }
}
const animal1= new animal("cat",1)
console.log(animal1);
console.log(animal1.iscute());