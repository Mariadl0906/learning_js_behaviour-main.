"use strict"


const nightColorBtn = document.getElementById("nightColorBtn");
const lightColorBtn = document.getElementById("lightColorBtn");
const body = document.body;
const dreamloveBtn = document.getElementById("dreamlove");


nightColorBtn.addEventListener("click", () => {
    body.style = "background: #121212";
})

lightColorBtn.addEventListener("click", () => {
   body.style = "background: #FFFFFF"; 
})

dreamloveBtn.addEventListener("click", () => {
   body.style = "background: #ea74ffff"; 
})
