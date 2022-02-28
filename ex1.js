var r = Math.floor (Math.random () *10);
var difficulty =prompt("donner le niveau de difficulté :");
var tries =0;
if (difficulty==1)
 {tries=6}
 else if (difficulty==2)
 {tries=4}
 else if (difficulty==3)
 {tries=2}
 while(tries >0)
  {  tries --;

      var input =prompt("donner un nombre ") ;
      if (input ==r)
      alert("winner");
      else alert("il vous reste "+ tries+" tries") ;
  }