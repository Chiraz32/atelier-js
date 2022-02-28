let a =document.querySelector(".hi");
console.log(a);
 let b=document.querySelector("#couleur");
 let c=document.querySelector("#size");
 let d=document.querySelector("#police");
 console.log(b);
 console.log(c);
 console.log(d);
b.addEventListener("input",(e)=>
{a.style.color= e.target.value;
    console.log(a.style.color);
}
);

c.addEventListener("change",(e)=>
{a.style.fontSize=  e.target.value +'px';
 console.log(a.style.fontSize);}
);

d.addEventListener("change",(e)=>
{a.style.fontFamily=  e.target.value;
console.log(a.style.fontFamily);}
) 


