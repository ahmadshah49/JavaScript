const bucket=['vegetables','salts','rice']
const  friedrice= new Promise((reslove,reject)=>{
    if (bucket.includes('vegetables')&& bucket.includes('salts')&&bucket.includes('rice')) {
        reslove(console.log("Fried Rice"));
        
    }else{
        reject(console.log("you Can't add Something"))
    }
})
friedrice.then(
    (any)=>{
        console.log("You Can Eat ",any );
    }
).catch(
    (error)=>{
        console.log(error);
    })