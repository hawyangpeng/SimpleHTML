
//const form1 = document.getElementById("form1")

form1.addEventListener("submit", (e) => {
    // on form submission, prevent default
    e.preventDefault();

    const formData = new FormData(form1)

    console.log(formData.get('fname'))
    console.log(formData.get('lname'))
    console.log(formData.get('email'))
    console.log(formData.get('mobile'))
})
