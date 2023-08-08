


function friedRice() {
    const bucket=['vegetables','salts','rice']
   return new Promise((resolve, reject) => {
        if (bucket.includes('vegetables') && bucket.includes('salts') && bucket.includes('rice')) {
            resolve(("Fried Rice"));

        } else {
            reject(("you Can't add Something"))
        }
    })
}
friedRice().then(
 (result)=>{
    console.log(`You Can Eat ${result}`);
 }
).catch(
    (error)=>{
        console.log(error);
    })


    