let signUpCaller = document.querySelector(".signUpBtn");
let signInCaller = document.querySelector(".signInBtn"); 
let signInForm = document.querySelector(".signIn"); 
let signUpForm = document.querySelector(".signUp"); 
let OurSection = document.querySelector(".OurSection");


function signUpfct(){
    signUpForm.classList.add('active'); 
    signInForm.classList.add('active')
    OurSection.classList.add('active')
}


function signInfct(){
    signUpForm.classList.remove('active'); 
    signInForm.classList.remove('active')
    OurSection.classList.remove('active')
}





