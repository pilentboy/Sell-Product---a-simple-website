//get elements
const hamburgerBTN=document.querySelector(".Hamburger");
const navHolder=document.querySelector(".nav-holder");
const main=document.querySelector(".main");
const displayNavIcon=document.querySelector(".display-btn");

/* NAVBAR DISPLAY CONTROLS */
hamburgerBTN.addEventListener("click",function(){ 

    if(navHolder.classList.contains("display") == false){
        navHolder.classList.add("display");
        displayNavIcon.classList.remove("bi-list");
        displayNavIcon.classList.add("bi-x-lg");

    }

    else{
        navHolder.classList.remove("display");
        displayNavIcon.classList.remove("bi-x-lg");
        displayNavIcon.classList.add("bi-list");
    }

});


main.addEventListener("click",function(){
    if(navHolder.classList.contains("display")){
        navHolder.classList.remove("display");
    }
    
})


