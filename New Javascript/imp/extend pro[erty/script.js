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
// const animal1= new animal("cat",1)
// console.log(animal1);
// console.log(animal1.iscute());
class dog extends animal{

    constructor(name,age,speed){
        super(name,age)
        this.speed=speed
    }    
}
const dog1=new dog("tomy",1,36)
console.log(dog1);
