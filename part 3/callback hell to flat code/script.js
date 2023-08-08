const h1 = document.querySelector(".heading1")
const h2 = document.querySelector(".heading2")
const h3 = document.querySelector(".heading3")
const h4 = document.querySelector(".heading4")
const h5 = document.querySelector(".heading5")
const h6 = document.querySelector(".heading6")
const h7 = document.querySelector(".heading7")





function changetext(element,text,color,time) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (element) {
                element.textContent=text
                element.style.color=color
                resolve()
            }else{
                reject("You Mising SomeThing Please Check The code")
            }
        }, time)
    });
}
changetext(h1,"One","red",1000)
.then(()=>changetext(h2,"Two","green",1000))
.then(()=>changetext(h3,"Three","blue",1000))
.then(()=>changetext(h4,"four","blue",1000))
.then(()=>changetext(h5,"five","red",1000))
.then(()=>changetext(h6,"six","green",1000))
.then(()=>changetext(h7,"seven","blue",1000))
.catch((error)=>{
    alert(error)
})


// function changetext(element, text, color, time) {
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             if (element) {
//                 element.textContent=text
//                 element.style.color=color
//                 resolve()
//             }else{
//                 reject("Enter True Information")
//             }
//         }, time);
//     })
// }
// changetext(h1,"one","red",1000)
// .then(()=>changetext(h2,"Two","green",1000))
// .then(()=>changetext(h3,"three","blue",1000))
// .then(()=>changetext(h4,"four","purple",1000))
// .then(()=>changetext(h5,"five","purple",1000))
// .then(()=>changetext(h6,"five","purple",1000))
// .then(()=>changetext(h7,"five","purple",1000))
// .catch((error)=>{
//     alert(error)
// })



