
//const form1 = document.getElementById("form1") - commented this out but still works.

//form1 is the document ID
form1.addEventListener("submit", (e) => {
    // on form submission, prevent default
    e.preventDefault();

    //makes the form data into and Object
    const formData = new FormData(form1)

    //formData.get() only works with a formData object
    console.log(formData.get('fname'))
    console.log(formData.get('lname'))
    console.log(formData.get('email'))
    console.log(formData.get('mobile'))
})
