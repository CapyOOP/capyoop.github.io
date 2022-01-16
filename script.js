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