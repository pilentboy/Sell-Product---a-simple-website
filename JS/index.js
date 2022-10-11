// GET ELEMENTS 
const workSamples=document.querySelector(".work-samples");
const samplesBTN=document.querySelector("#work-samples-BTN");
const workSampleIcon=document.querySelector(".bi-arrow-right-square-fill");
const workSampleBackImage=document.querySelector(".workSmpleBackImage");

samplesBTN.addEventListener("click",function(){
    
    workSamples.classList.toggle("work-samples-Translate");
    samplesBTN.classList.toggle("right");

    // change sample display BTN icon 
    if(workSampleIcon.classList.contains("bi-arrow-right-square-fill")){
        workSampleIcon.classList.remove("bi-arrow-right-square-fill");
        workSampleIcon.classList.add("bi-arrow-left-square-fill");
    }
    else{
        workSampleIcon.classList.add("bi-arrow-right-square-fill");
        workSampleIcon.classList.remove("bi-arrow-left-square-fill");
    }
    workSampleBackImage.classList.toggle("active");
  
})
