

// const prom = new Promise ((resolve,reject) => {
    
//     if (true){
//         resolve({a:22})
//     } else {
//         reject(30)
//     }
// })

// console.log(prom)


const prom = new Promise ((resolve,reject)=>{
    
    const random = Math.floor(Math.random()*10)
    setTimeout(()=>{
        if(true){
            resolve('resolved')
        } else {
            reject('rejected')
        }
    },2000)
})

prom.then((value) => {
    console.log(value)
}) .then(()=>{
    console.log('testing...')
    return 3
}) .then((value) => {
    console.log(value)
    
})
.catch ((err) => {
    console.log(err)
})

console.log('enjoy!')

