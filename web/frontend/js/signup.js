function signup(){
    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    console.log(`First Name = ${firstname}`)
    console.log(`Last Name = ${lastname}`)
    console.log(`Username = ${username}`)
    console.log(`Password = ${password}`)

    if(firstname == "" || lastname == "" || username == "" || password == ""){
        alert("Please enter required fields.")
    }
    else{
        let payload = {
            first_name: firstname,
            last_name: lastname,
            username: username,
            password: password
        }
    signupRequest(payload)
    }
}

function signupRequest(payload){
    let url = "http://localhost:8000/users/register"

    let content = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    api_client(url, content, (response)=>{
        if (response.successful == true){
            alert(response.message)
        }
        else{
            alert(response.message)
        }
    })
}