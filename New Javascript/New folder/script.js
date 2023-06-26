// Check if the length of the string is greater than 5. If it is, slice the string to only include the first 5 characters.

let myName="Ahmad Raza"
console.log(myName.length);
if (myName.length>=5) {
    let neu=( myName.slice(0,5));
    console.log(neu);
}else{
    console.log(myName);
}
let nee=(myName.toLocaleUpperCase())
console.log(nee);