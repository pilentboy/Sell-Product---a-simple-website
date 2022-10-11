// get elements
const displayUserInfoBTN=document.querySelector("#displayInfoControler");
const userPurchases=document.querySelector(".userPurchases-container");
const userInfoContainer=document.querySelector(".userInfo-container");

displayUserInfoBTN.addEventListener("click",()=>{
        userPurchases.classList.toggle("display")
        userInfoContainer.classList.toggle("display")

        if (userPurchases.classList.contains("display")){
            displayUserInfoBTN.innerHTML="Your Information";
        }
        
        else{
            displayUserInfoBTN.innerHTML="Your purchases";

        }
})

console.log(userInfoContainer)

