const buyBTN=document.querySelector("#buy-BTN");
const buysCounter=document.querySelector("#buysCounter");
const ErrornotfMessage=document.querySelector(".error-notf");
const addNotf=document.querySelector(".add-notf");

function removeNotfMessage(){
    ErrornotfMessage.classList.remove("showNotf");
}

function removeAddedNotfMessage(){
    addNotf.classList.remove("showNotf");
}



buyBTN.addEventListener("click",() => {
    if(buysCounter.innerHTML=="1"){
        ErrornotfMessage.classList.add("showNotf");
        setTimeout(removeNotfMessage,1000)
    }

    else{
        buysCounter.innerHTML="1";    
        addNotf.classList.add("showNotf");
        setTimeout(removeAddedNotfMessage,1000)
    }
   
})