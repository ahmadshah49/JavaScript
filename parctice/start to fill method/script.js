// // varibales proprties
// // trim
// let firstName="   Ahmad"
// console.log(firstName.length);
// firstName=firstName.trim();
// console.log(firstName.length);

// // toUppercase
// console.log(firstName.toUpperCase());

// // to lower case
// console.log(firstName.toLowerCase());

// // slice 
// firstName= "ahmad raza"
// console.log(firstName.slice(0,5));
// // typeof opreator

// console.log(typeof firstName);
// // string Concatination
// // let lastName= "raza ahmad"



// switch statement
// let day=+prompt("Please Enter A number")
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;

//     default: 
//     console.log("invalid Day");
//         break;
// }


// if else else if else check temaparture

// let temaparture =+prompt("Enter temprature")
// if (temaparture < 0) {
//     console.log("Snow Fall");
// } else if(temaparture <= 10){
//     console.log("It Is ToO Cold");
// } else if(temaparture<=20){
//     console.log("Cold");
// }
// else if(temaparture<=30){
//     console.log("Normal Whether");
// }
// else if(temaparture<=40){
//     console.log("it is Hot OutSide");
// }
// else if(temaparture<=50){
//     console.log("it is Too High...");
// }else{
//     console.log("turn On ac");
// }

// first 10th numbers Sum With While Loop
// let num=+prompt("Enter A number That You sum")
// let total =0;
// let i=0;
// while (i<=num) {
//     total=total+i
//     i++
// }
// console.log(total);


// first 10th numbers Sum With for Loop
// let total=0;
// let num=10;
// for(let i=0;i<=num;i++){
//     console.log(i);

//     total=total+i
// }


// break and continue keyword

// let total=0;
// let num=10;
// for(let i=0;i<=num;i++){
//     if (i===4) {
//       continue;
//     }
//     console.log(i);
    
// }

// let total=0;
// let num=10;
// for(let i=0;i<=num;i++){
//     if (i===5) {
//       break;
//     }
//     console.log(i);
    
// }
    
// do while loop

// let i=0;
// do {
//     console.log(i);
//     i++
    
// } while (i<=10);




// ================= Array ==================

// push pop 
// const fruits=["apple","Bananan","Mango"]
// let dl=fruits.pop("Grapes")
// fruits.push("grapes")
// console.log(fruits);
// console.log(dl);

// shift Unshift
// const fruits=["apple","Bananan","Mango"]
// fruits.shift("fruit")
// // yeh remove kry ga
// fruits.unshift("Grapes")
// // yeh start ma add kry ga
// console.log(fruits);

// ============= Araay Cloning =============

// let araay1=["item1","item2","item3"]
// console.log(araay1);
// let araay2=[...araay1,"item4"]
// console.log(araay2);

// ============= For Loop Araay  =============
// ============= Print All Array elements by For Loop   =============



// const fruits=["apple","Banana","Mango"];
// const fruits2=[];
// for(let i=0;i<fruits.length;i++){
    //     console.log(fruits[i]);
    //     fruits2.push(fruits[i].toUpperCase());
    // }
    // console.log(fruits2);
    
    
    // ============= While Loop Araay  =============
    // ============= Print All Array elements by While Loop   =============
    
    
    
    
    //     const fruits=["apple","Banana","Mango"];
    
    //     const fruits2=[];
    //     let i=0
    // while (i<fruits.length) {
        //     fruits2.push(fruits[i].toUpperCase());
        //     i++
        // }
        // console.log(fruits2);
        
        
        
        
        // ============= for of  Loop Araay  =============
        // ============= Print All Array elements by for of Loop   =============
        
        
        // const fruits=["apple","Banana","Mango"];
        // const fruit2=[];
        // for(fruit of fruits){
        //     fruit2.push(fruit.toUpperCase());
        // }    
        // console.log(fruit2);



        // ============= change  Array item To Variable   =============
        
        
        // const araay1=["item1","item2","item3"];
        // let[myvar1,,myvar3]=araay1;
        // console.log(myvar1);
        // // console.log(myvar2);
        // console.log(myvar3);
        
        
        // =============    Objects   =============
        
//         const person={name:"ahmad",age:18}
//         console.log(person.age);
//         console.log(person.name);

//         // add new keyword in object
// console.log(person["age"])   

// let key="Email"
// person[key]="@gmail.com"
// console.log(person);


// ittrare objects for in loop
// const person={name:"ahmad",age:18};
// for(key in person){
    //     console.log(person[key]);
    // }
    
    // ittrare objects.key keyword
    

