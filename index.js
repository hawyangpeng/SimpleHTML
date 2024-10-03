

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('index page loaded')
    fetch ('http://localhost:3000/')
    //.then (response => console.log(response))
    }
)

document.getElementById('p0').innerHTML = "Inner"

document.getElementById('p0').addEventListener("mouseover", (event) => {
    fetch ('http://localhost:3000/NASA')
    }
)

document.getElementById('btn2').addEventListener("click", (event) => {
    console.log('get data button clicked')

    fetch ('http://localhost:3000/getData')
    }
)