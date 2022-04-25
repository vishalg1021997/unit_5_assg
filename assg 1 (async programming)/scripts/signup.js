var username = document.querySelector('#username')
var contact = document.querySelector('#contact')
var email = document.querySelector('#email')
var pass = document.querySelector('#pass')
var form = document.querySelector('form')

function signup(){
    event.preventDefault()
    if(username.value == '' || contact == '' || email == '' || pass == ''){
        alert('Please  Fill All The Details')
    }else{
        var arr = {username:username.value,contact:contact.value,email:email.value,pass:pass.value}
        localStorage.setItem(email.value,JSON.stringify(arr))
        alert('Signup Sucessfull')
        window.location.href = "/assg 1 (async programming)/login.html";
    }   
}

form.addEventListener('submit',signup)