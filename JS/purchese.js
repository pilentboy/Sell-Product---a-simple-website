// set purchesed number
const buysCounter=document.querySelector("#buysCounter");
const purchesedContainer=document.getElementsByClassName("item_purchesed");

let purchesedArray=[...purchesedContainer]

function setPurchesedNumber(){
    buysCounter.innerHTML=purchesedArray.length
}
setPurchesedNumber()