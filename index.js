

//Initial loading
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('fetched http://localhost:3000/')
    fetch ('http://localhost:3000/')
    }
)

//const tableData = {}

const renderTable = function (data) {
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
}


//Get data
document.getElementById('btn2').addEventListener("click", (event) => {
    console.log('get data button clicked')

    //Fetch data

    fetch ('http://localhost:3000/getData')
        .then (response => response.json())
        .then (data => {
            console.log(data)

            renderTable(data)
            
            //Delete entry. Append event listener to each delete button
            data.map( entry =>
                document.getElementById(entry.ID).addEventListener("click", (event) => {
                    console.log(`Delete entry ${entry.ID}`)

                const options = {
                    headers: {
                        'Content-Type': 'application/json'
                        },
                    method: 'DELETE',
                    body: JSON.stringify({ 'entryNumber': entry.ID })
                }
                
                console.log(event)

                fetch ('http://localhost:3000/deleteData', options)
                    .then(

                    )
                   
                }
            ))
        
            })
        .catch(err => console.log(err))
})

//post entry
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
        // .catch(err => console.log(err))
})


//found a bug, where if i keep pressing delete on one entry. Table wont refresh when getData.

