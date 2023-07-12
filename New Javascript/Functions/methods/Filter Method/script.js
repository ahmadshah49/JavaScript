const numbers=[1,5,8,6,44,58,44,11,98]
const evenNum =numbers.filter((number)=>{
    return number %2===0
})
console.log(evenNum);




const isodd=(number)=>{
    return number%2 !==0
}
const num=(numbers.filter(isodd));
console.log(num);
