

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('index page loaded')
    fetch ('http://localhost:3000/')
    }
)

document.getElementById('p0').innerHTML = "Inner"

document.getElementById('btn2').addEventListener("click", (event) => {
    console.log('get data button clicked')

    fetch ('http://localhost:3000/getData')
        .then (response => response.json())
        .then (data => {
            console.log(data)

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
        })
})

const form = document.getElementById('form')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(form)

    console.log('submitted')
   

    // for (const pair of formData.entries()) {
    //     console.log(pair[0], pair[1]);
    //   }

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
