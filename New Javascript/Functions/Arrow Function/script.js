// Function Decliration
 
// plus two numbers
 const plusTwo=  (num1,num2) => {
    return num1+num2;
}
console.log(plusTwo(4545,454));

// if Number is Even Ans is true OtherWhise fASLE
const evenOdd= (numb1) =>{
    
     if (numb1 % 2===0) {
        return true
    }
    return false;
}
console.log(evenOdd(10));

// check first string match in array
const ary= (araay,target)=> {
    for (let i = 0; i< araay.length; i++) {
     if (araay[i] === target ) {
        return i;
     }
    }
    return -1
}

const arry=[1,77,54,8,45,57,69,0]
console.log(ary(arry,45));