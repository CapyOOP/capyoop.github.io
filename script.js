function invis_name(){
  document.getElementById("name").style.color = "transparent"; 
};
function invis_work(){
  document.getElementById("work").style.color = "transparent"; 
};

document.body.onkeyup = function (e) {
 if ((e.keyCode == 32)) {
  document.getElementById("name").style.display = "none";
  document.getElementById("work").style.display = "none";
 }
};

for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
 for (let j = 0; j < 10; j++) {
   if (i === 5 && j === 5) {
     //! Эту строку можно изменить
   }
 
   console.log(i, j);
 }
}