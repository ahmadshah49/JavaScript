// const buttons=document.querySelectorAll(".buttons button")
// for(let button of buttons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }
// console.log(buttons);
// const allButton=document.getElementsByClassName("buttons")
// for(let button of allButton){
//     button.addEventListener("click",function(e){
//      e.target.style.backgroundColor="Yellow"
//      e.target.style.color="black"
//     })
// }

// const button=document.querySelector("button")
// const body=document.body
// const textColor=document.querySelector(".current-color")

// function changeColor() {
//   const red=Math.floor(Math.random()*256)
//   const green=Math.floor(Math.random()*256)
//   const blue=Math.floor(Math.random()*256)
//   const randomColor=`rgb(${red},${green},${blue})`
//   return randomColor
// }
// button.addEventListener("click",()=>{
//   const randomColor=changeColor();
//   body.style.backgroundColor=randomColor
//   textColor.textContent=randomColor
// })



const button=document.querySelector('button')
const body=document.body
const currentColor=document.querySelector(".current-color")

function changeColor() {
  const red=Math.floor(Math.random()*256)
  const green=Math.floor(Math.random()*256)
  const blue=Math.floor(Math.random()*256)
  const randomColor=`rgb(${red},${green},${blue})`
  return randomColor
}
button.addEventListener("click",()=>{
randomColor=changeColor();
body.style.backgroundColor=randomColor
currentColor.textContent=randomColor
})