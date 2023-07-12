products =[
  {product:'a1' ,num:1,price:500},
  {product:'a2' ,num:2,price:104500},
  {product:'a3' ,num:3,price:3500},
  {product:'a4' ,num:4,price:4500},
  {product:'a5' ,num:5,price:5500},
]
const ans=products.some((prices)=>prices.price>100000
)
console.log(ans);