/*GET ELEMENTS*/
const logInButton=document.querySelector("#LogInBTNInSignUp");
const signUpButton=document.querySelector("#signUpBTNInLogIn");

const logInSection=document.querySelector(".loginSection");
const SignUpSection=document.querySelector(".signUpSection");


/* CONTROL DISPLAY ON SMALL SCREEN FOR LOG IN SECTIONS*/ 
signUpButton.addEventListener("click",() =>{
    logInSection.classList.add("none");
    SignUpSection.classList.add("displayFlex");

})

logInButton.addEventListener("click",() =>{
    logInSection.classList.remove("none");
    SignUpSection.classList.remove("displayFlex");

})


/* GO TO USERINFO  */
 //log in
const logInButtonForEntering=document.getElementById("logInButton");
const userName=document.querySelector("#userName");
const userPassword=document.querySelector("#password");

logInButtonForEntering.addEventListener("click",() => {

    if (userName.value == "john" && userPassword.value =="12345678"){
          window.open("./userInformation.html", "_self")
    }
    else{
        alert("user name = john , password = 12345678")
    }

})


/* sign up */
const signUpBTNForEntering=document.querySelector("#signUpBTN");
const signUpEmail=document.querySelector("#newEmail");
const signUpUserPassword=document.querySelector("#newPassword");
const signUpUserName=document.querySelector("#newUserName");

signUpBTNForEntering.addEventListener("click",()=>{
    if(signUpUserName.value.length >=5 &&
         signUpUserPassword.value.length >=8 &&
        signUpEmail.value.length >= 10 
    )
    {
        window.open("./userInformation.html", "_self") 
        alert("you signed up successfully")
    }
    else{
        alert("error")
    }
})
