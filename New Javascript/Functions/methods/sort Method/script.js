products =[
  {product:'a1' ,num:1,price:500},
  {product:'a2' ,num:2,price:14500},
  {product:'a3' ,num:3,price:3500},
  {product:'a4' ,num:4,price:4500},
  {product:'a5' ,num:5,price:5500},
]
const lowtoHigh= products.slice(0).sort((a,b)=>{
  return a.price - b.price
 })
 console.log(lowtoHigh);



const toHiglowh= products.slice(0).sort((a,b)=>{
  return b.price - a.price
 })
 console.log(toHiglowh);