const body=document.body;
const button=document.querySelector("button")
const interval= setInterval(() => {
   const red=Math.floor(Math.random()*100) 
   const green=Math.floor(Math.random()*100) 
   const blue=Math.floor(Math.random()*100) 
   const rgb=`rgb(${red},${green},${blue})`
   body.style.backgroundColor=rgb
}, 1000);
button.addEventListener("click",()=>{
    clearTimeout(interval)
    button.textContent=body.style.backgroundColor
})