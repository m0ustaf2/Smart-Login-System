let signinEmail=document.getElementById('signinEmail');
let signinPass=document.getElementById('signinPassword');
let loginBtn=document.getElementById('btn-login');
let required=document.getElementById('required');
let incorrect=document.getElementById('incorrect');

let userData=[];

    userData=JSON.parse(localStorage.getItem('dataList'))


loginBtn.onclick=function()
{
    if (signinEmail.value == '' ||  signinPass.value == '') 
    {
        required.classList.remove('d-none')
    
    }
    else
    {
        checkInputs();
        
    }
}
function checkInputs()
{
    for(var i=0;i<userData.length;i++)
{
if(userData[i].email.toLowerCase() == signinEmail.value.toLowerCase() && userData[i].password.toLowerCase() == signinPass.value.toLowerCase())
     
      {
        let x = userData[i].name;
        localStorage.setItem('userName', x)
        location.href = "./home.html";
        incorrect.classList.add('d-none')

        break;
      }
      else
      {
        incorrect.classList.remove('d-none')
        required.classList.add('d-none')
      }
}
} 

// ***********Email-Validation*************

let emailAlert =document.getElementById('emailInvalid');
signinEmail.onkeyup=function()
{
    var emailRejex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(emailRejex.test(signinEmail.value))
    {
        signinEmail.classList.add('is-valid');
        signinEmail.classList.remove('is-invalid');
        emailAlert.classList.add('d-none')

    }
    else{
        signinEmail.classList.add('is-invalid');
        signinEmail.classList.remove('is-valid');
        emailAlert.classList.remove('d-none')

    }
}
// ***********Password-Validation*************

let passAlert =document.getElementById('passwordInvalid');
signinPass.onkeyup=function()
{
    var passRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,15}$/;
    if(passRejex.test(signinPass.value))
    {
        signinPass.classList.add('is-valid');
        signinPass.classList.remove('is-invalid');
        passAlert.classList.add('d-none')

    }
    else{
        signinPass.classList.add('is-invalid');
        signinPass.classList.remove('is-valid');
        passAlert.classList.remove('d-none')

    }
}

