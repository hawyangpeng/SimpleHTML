


//Initial loading
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('index page loaded')
    fetch ('http://localhost:3000/')
    }
)


//getData
document.getElementById('btn2').addEventListener("click", (event) => {
    console.log('get data button clicked')

    //Fetch data
    fetch ('http://localhost:3000/getData')
        .then (response => response.json())
        .then (data => {
            console.log(data)

            // for (const value of data) {
            //     console.log(value);
            //   }

            const tableEntries = data.map( entry =>
                `  <tr>                
                        <td>${entry.ID}</td>
                        <td>${entry.FirstName}</td>
                        <td>${entry.LastName}</td>
                        <td>${entry.Email}</td>
                        <td>${entry.Mobile}</td>
                        <td>
                            <button onclick="location.reload()">Edit</button>
                        </td>
                        <td>
                            <button id=${entry.ID}>Delete</button>
                        </td>
                    <tr>
                `
            )

            const table = 
                `   <tr>                
                        <th>ID</td>
                        <th>First Name</td>
                        <th>Last Name</td>
                        <th>Email</td>
                        <th>Mobile</td>
                    <tr>
                    ${tableEntries}
                `
            
            document.getElementById('table').innerHTML = table

            //Spaghetti. but it works. I'm sure there's a better way to do this.
            const entriesBtn = data.map( entry =>
                document.getElementById(entry.ID).addEventListener("click", (event) => {
                    console.log(`Delete entry ${entry.ID}`)
                })
            )

            entriesBtn

        })
})

//Form data
const form = document.getElementById('form')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(form) //Insert form into formData object

    console.log('submitted')
   
    const options = {
        headers: {
        //     'Content-Type': 'application/json'
                'enctype' : "multipart/form-data"
          },
        method: 'POST',
        body: formData
    }

    fetch ('http://localhost:3000/postData', options)
        // .then(res => res.json())
        // .then(data => console.log(data))
        //.catch(err => console.log(err))
})


//deleteData


function deleteEntry(ID){
console.log(ID)
//     const options = {
//         headers: {
//         //     'Content-Type': 'application/json'
//                 'enctype' : "multipart/form-data"
//           },
//         method: 'POST',
//         body: ID
//         }

//     fetch ('http://localhost:3000/deleteData', options)
//             // .then (response => response.json())
//             // .then (data => {console.log(data)})
}