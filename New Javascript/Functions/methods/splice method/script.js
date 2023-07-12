const myArray=new Array(10).fill(2)
// for delete item in array
const dlteitem=myArray.splice(2,8)
// console.log(dlteitem);

// for insert 
const insertItem=myArray.splice(2,0,5)

// both

myArray.splice(1,8,14)
// index number === which number of items dlte ==== what is the that you insert


console.log(myArray);