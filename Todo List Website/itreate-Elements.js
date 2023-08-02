// let navItems=document.getElementsByTagName("a")
// console.log(navItems);
// // for(let navItem of navItems){
// //     navItem.style.color="black"
// //     navItem.style.backgroundColor="white"
// // }

// navItems= Array.from(navItems)
// navItems.forEach((navItem) => {
//     navItem.style.color="black"
//     navItem.style.backgroundColor="white"
// });

const navItems=document.querySelectorAll("a")
// navItems.forEach((navItem) => {
//     navItem.style.color="black"
//     navItem.style.backgroundColor="white"
// });
console.log(navItems);
for(let navItem of navItems){
    navItem.style.color="black"
    navItem.style.backgroundColor="white"
}