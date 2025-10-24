"use strict";


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.innerHTML = "<strong>BILKA!</strong>"
// });


// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {

//     if (this.textContent == "Hvem ka"){
//         this.innerHTML = "<strong>BILKA!</strong>";
//     }
//     else {
//         this.innerHTML = "Hvem ka";
//      }
// });


const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {

    if (this.textContent == "Livet er dyrt – gå i Netto"){
        this.innerHTML = "<strong>Netto – Lige ud af posen.</strong>";
    }
    else {
        this.innerHTML = "Livet er dyrt – gå i Netto";
     }
});

