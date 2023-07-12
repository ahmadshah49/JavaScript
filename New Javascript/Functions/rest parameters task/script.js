const addAll=(...numbers)=>{
let total=0;
for( number of numbers){
    total=total+number
}
return total
}
console.log(addAll(1,2,1,454,542,4542.,4574));


function name1(a,b,...c) {
    console.log("a is" ,a);
    console.log("b is" ,b);
    console.log(`C is ${c}`);
}
name1(1,2,3,4);
