let supName=document.getElementById('signupName');
let supEmail=document.getElementById('signupEmail')
let supPass=document.getElementById('signupPassword')
let signupBtn=document.getElementById('btn-signup');
let error=document.getElementById('error');
let exist=document.getElementById('exist');
let success=document.getElementById('success');

let userData=[];
if(JSON.parse(localStorage.getItem('dataList')) != null)
{
    userData=JSON.parse(localStorage.getItem('dataList'))
}
// **************signupButton*****************
signupBtn.onclick=function(){
    if ( isEmailExist()== false) {
        exist.classList.remove('d-none');
        success.classList.add('d-none');
    } 
    else
    {
        exist.classList.add('d-none');
        addData();
    }
}   
function addData()
{
    if (supName.value == '' ||  supEmail.value == '' || supPass.value == '')
    {
        error.classList.remove('d-none');

    }
    else{

        
       let data=
        {
            name:supName.value,
            email:supEmail.value,
            password:supPass.value,
        }
        userData.push(data)
        localStorage.setItem("dataList",JSON.stringify(userData))
        success.classList.remove('d-none');
        error.classList.add('d-none');


    }
   
}
// ---------------------------------------------
// **********Email-Existence***********
function isEmailExist()
{
    for(var i=0;i<userData.length;i++)
    {

    if(userData[i].email.toLowerCase()==supEmail.value.toLowerCase())
         
          {
            return false;
          }
   }
}
// -----------------------------------------------

// ***********Name-Validation*************
let nameAlert =document.getElementById('nameInvalid');
signupName.onkeyup=function()
{
    var nameRejex=/^[A-Z][a-z]{3,9}(\s?[A-Za-z]{3,9})?$/;
    if(nameRejex.test(signupName.value))
    {
        signupName.classList.add('is-valid');
        signupName.classList.remove('is-invalid');
        nameAlert.classList.add('d-none')

    }
    else{
        signupName.classList.add('is-invalid');
        signupName.classList.remove('is-valid');
        nameAlert.classList.remove('d-none')

    }
}
// ***********Email-Validation*************

let emailAlert =document.getElementById('emailInvalid');
signupEmail.onkeyup=function()
{
    var emailRejex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(emailRejex.test(signupEmail.value))
    {
        signupEmail.classList.add('is-valid');
        signupEmail.classList.remove('is-invalid');
        emailAlert.classList.add('d-none')

    }
    else{
        signupEmail.classList.add('is-invalid');
        signupEmail.classList.remove('is-valid');
        emailAlert.classList.remove('d-none')

    }
}
// ***********Password-Validation*************

let passAlert =document.getElementById('passwordInvalid');
signupPassword.onkeyup=function()
{
    var passRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,15}$/;
    if(passRejex.test(supPass.value))
    {
        supPass.classList.add('is-valid');
        supPass.classList.remove('is-invalid');
        passAlert.classList.add('d-none')

    }
    else{
        supPass.classList.add('is-invalid');
        supPass.classList.remove('is-valid');
        passAlert.classList.remove('d-none')

    }
}

