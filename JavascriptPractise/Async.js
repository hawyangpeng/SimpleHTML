


function pickupTimber() {
        const promise1 = new Promise ((resolve,reject) => {
            if (true) {
                resolve('Timber picked up')
            } else {
                reject('rejected')
            }
        })
        return promise1
    }


async function makefurniture() {
        const taskOne = await pickupTimber()
        console.log(taskOne)
}

makefurniture()