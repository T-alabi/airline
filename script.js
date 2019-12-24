function roundtrip() {
  document.getElementById("return").style.display = "block";
  document.getElementById("date2").style.display = "block";
}

function oneway() {
  document.getElementById("return").style.display = "none";
  document.getElementById("date2").style.display = "none";
}

function AttendentApp() {
document.getElementById("AttendentApplication").style.display= "block";
document.getElementById("PilotApplication").style.display="none";
}

function PilotApp(){
  document.getElementById("AttendentApplication").style.display= "none";
  document.getElementById("PilotApplication").style.display="blockS";

}
