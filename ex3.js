let nom=document.querySelector("#name")
let contenu=document.querySelector("#content")
let bouton=document.querySelector("#bb")
let nouveau=document.querySelector("#n")
 bouton.addEventListener("click",
 ()=>{ 
     if(nom.value!="" && contenu.value!="")
     {nouveau.innerHTML+=`<div>${nom.value} : ${content.value} <img src="delete.jpg" alt="poubelle"></div>`
     nom.value=""
     content.value=""}
     else {
         alert ("insert something")
     }
    

  }
 )
 nouveau.addEventListener("click",(e)=>{
     if(e.target.tagName==="IMG") {
         e.target.parentNode.parentNode.removeChild(e.target.parentNode)
     }
 })