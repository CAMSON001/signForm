let signUpCaller = document.querySelector(".signUpBtn");
let signInCaller = document.querySelector(".signInBtn"); 
let signInForm = document.querySelector(".signIn"); 
let signUpForm = document.querySelector(".signUp"); 


function signUpfct(){
    signUpForm.classList.add('active'); 
    signInForm.classList.add('active')
}


function signInfct(){
    signUpForm.classList.remove('active'); 
    signInForm.classList.remove('active')
}





