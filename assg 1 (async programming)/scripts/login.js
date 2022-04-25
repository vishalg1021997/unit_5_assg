var email = document.querySelector('#email')
var pass = document.querySelector('#pass')
var form = document.querySelector('form')

function login(){
    event.preventDefault()
    if(email == '' || pass == ''){
        alert('Please  Fill All The Details')
    }else if(localStorage.getItem(email.value) != null & JSON.parse(localStorage.getItem(email.value)).pass == pass.value){
        // var userdata = JSON.parse(localStorage.getItem(email.value)).pass == pass.value
        // var userdata = localStorage.getItem(email.value)
        alert('Login Sucessfull')
        window.location.href = "/assg 1 (async programming)/index.html";
    }else{
        alert('Wrong Credentials')
    }  
}

form.addEventListener('submit',login)