function roundtrip() {
  document.getElementById("return").style.display = "block";
  document.getElementById("date2").style.display = "block";
}

function oneway() {
  document.getElementById("return").style.display = "none";
  document.getElementById("date2").style.display = "none";
}

function AttendantApp() {
document.getElementById("AttendantApplication").style.display= "block";
document.getElementById("PilotApplication").style.display="none";
}

function PilotApp(){
  document.getElementById("AttendantApplication").style.display= "none";
  document.getElementById("PilotApplication").style.display="blockS";
}
function ConfirmEmail(){
  var email = document.getElementById("email").value
          var confEmail = document.getElementById("confEmail").value
          if(email != confEmail) {
              alert('Email Not Matching!');
          }
}
