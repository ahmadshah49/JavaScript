products =[
  {userId:1, userName:"ahmad"},
  {userId:2, userName:"raz"},
  {userId:3, userName:"Anything"},
  {userId:4, userName:"hanaa"},
]
// const ans =products.find((user)=> user.userId===4)
// console.log(ans);


const ans =products.find((user)=>user.userName=== "ahmad")
console.log(ans);