// find targeted Number
const targetNum= (araay,target)=>{
    for (let i = 0;  i< araay.length; i++) {
        if (araay[i]===target) {
            return i;
        }
    }
    return -1
}
const ary=[1,65,48,2,3565,545]
console.log(targetNum(ary,545));