products =[
  {userId:4500, userName:"ahmad"},
  {userId:4222, userName:"raz"},
  {userId:10000, userName:"Anything"},
  {userId:400, userName:"hanaa"},
]
// const ans =products.find((user)=> user.userId===4)
// console.log(ans);


const ans =products.every((user)=>user.userId<=10000)
console.log(ans);