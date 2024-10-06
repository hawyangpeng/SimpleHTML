

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('index page loaded')
    fetch ('http://localhost:3000/')
    }
)

document.getElementById('p0').innerHTML = "Inner"

document.getElementById('btn2').addEventListener("click", (event) => {
    console.log('get data button clicked')


    const textDecoder = new TextDecoder('utf-8')

    // fetch ('http://localhost:3000/getData')
    //     .then (response => {
    //         return response.body.getReader().read()})
    //     .then (({value,done}) => {
    //         console.log(done)
    //         console.log(value)
    //         console.log(textDecoder.decode(value))
    //     }
    //     )
    
    fetch ('http://localhost:3000/fakeGetData')
        .then (response => console.log(response.json()))

    }
)