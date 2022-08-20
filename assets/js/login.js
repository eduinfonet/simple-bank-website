/* //step 01: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){

// step -02: get the email address inside the email input field
// use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;


//step -03: get password
// 3.a: set id on the html element
// 3.b: get the element
// 3.c: get the value from the element

const passwordField = document.getElementById("user-password");
const password = passwordField.value;

// step 04: verify email and password

if(email === 'abc@gmail.com' && password === 'abc'){
   window.location.href = 'bank.html';
} else{
    alert('Username or Password is not valid');
}


})*/

 document.getElementById("btn-submit").addEventListener('click', function(){
   const userEmail = document.getElementById("user-email");
   const email = userEmail.value;
   email.value = '';

   const userPassword = document.getElementById("user-password");
   const password = userPassword.value;
   password.value = '';

   if(email === 'baec@gmail.com' && password === 'baec' ){
    window.location.href = 'deposit-withdraw.html';

   } else{
     alert('Please Check email or password') ;
   }  
})

// document.getElementById("btn-submit").addEventListener('click', function(){
//     const userEmail = document.getElementById("user-email"); 
//     const email = userEmail.value;
   

//     const userPassword = document.getElementById("user-password");
//     const password = userPassword.value;


//     if (email === 'khan@gmail.com' && password === 'khan') {
//         window.location.href = 'bank.html';
//     }else{
//         console.log('check email or password');
//     }
// })