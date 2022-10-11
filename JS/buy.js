
const buy=document.getElementsByClassName("BUY");
const buysCounter=document.querySelector("#buysCounter");
const cardItem=document.querySelector(".card_item");


/*  add items to buys*/

function getIndexOfItem(item){
    return buyButton.indexOf(item)
}



let buyButton=[...buy]
let userBuys=[]
let counter=0

buyButton.forEach((e) => {
    e.addEventListener("click",() => {
 
        if (userBuys.includes(getIndexOfItem(e)) == false){
            userBuys.push(buyButton.indexOf(e))
            counter+=1
            buysCounter.innerHTML=counter;
        
        }
     
        
    })

})

/* CLOSE NOTF MESSAGE WITH BUTTON */
// closeNotfBTN.addEventListener("click",removeNotfMessage);



/* SEARCH  --------------NOT AVAILABLE YET*/
const searchInput=document.querySelector("#searchInput");
const searchButton=document.querySelector("#searchButton");


/* NAV */

