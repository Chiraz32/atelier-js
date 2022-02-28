
var x=document.querySelector("#bn");
console.log(x);


x.addEventListener("click",function(e){
    function getColorCode() {
        var makeColorCode = '0123456789ABCDEF';
        var code = '#';
        for (var count = 0; count < 6; count++) {
           code =code+ makeColorCode[Math.floor(Math.random() * 16)];
        }
        return code;}
    

    e.target.style.color = getColorCode();
    
    } )
