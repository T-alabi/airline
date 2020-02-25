// book
function roundtrip() {
  document.getElementById("return").style.display = "block";
  document.getElementById("date2").style.display = "block";
}

function oneway() {
  document.getElementById("return").style.display = "none";
  document.getElementById("date2").style.display = "none";
}

// sign up
function uscountry() {
  var c = document.getElementById("countryname");
  var countryselected = c.options[c.selectedIndex].value;
  if (countryselected == "United States") {
    document.getElementById("usstates").style.display = "block";
  }
  else {
    document.getElementById("usstates").style.display = "none";
  }
}

// join the team
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
function FormComplete() {
  alert("The Form Has been Submitted. Thank you!");
  document.getElementById("form").style.display = "none";
}
/*can you style alert boxes?*/
function OpenLogin() {
  document.getElementById("LoginForm").style.display = "block";
}

function closeForm() {
  document.getElementById("LoginForm").style.display = "none";
}
function submitConfirmation(){
  document.getElementById("frequentFlyerForm").style.display= "none";
  document.getElementById("").style.display= "block";
}
/*sql and DB stuff*/
/**/
