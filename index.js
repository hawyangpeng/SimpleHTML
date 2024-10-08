

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


document.getElementById('btn3').addEventListener("click", (event) => {
    console.log('post data button clicked')

    const testData = { name:"John" }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(testData)
    }

    fetch ('http://localhost:3000/postData', options)

})
