const addToCart=[
    {ProductCode:1 , ProductName:"laptop" , ProductPrice:55000},
    {ProductCode:2 , ProductName:"Mobile" , ProductPrice:20000},
    {ProductCode:3 , ProductName:"Cosmetics" , ProductPrice:8000},
    {ProductCode:4, ProductName:"Perfumes" , ProductPrice:2500},
    {ProductCode:5, ProductName:"Clothes" , ProductPrice:7500},
]
// const totalAmount= addToCart.reduce((total,currentValue) =>{
//     return total + currentValue.ProductPrice
// },0)
// console.log(totalAmount);


const totalAmount=addToCart.reduce((total,currentValue)=>{
  return total + currentValue.ProductPrice
},0)
console.log(totalAmount);



