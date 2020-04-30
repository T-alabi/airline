var objPeople = [
  {username: "user",
  password: "pass"
  }
]

// book
function roundtrip() {
  document.getElementById("return").style.display = "block";
  document.getElementById("date2").style.display = "block";
}

function oneway() {
  document.getElementById("return").style.display = "none";
  document.getElementById("date2").style.display = "none";
}

// timetable
function changeView() {
  var v = document.getElementById("view");
  var viewselected = v.options[v.selectedIndex].value;
  if (viewselected == "month") {
    window.location.href = "timetable.html";
  }
  else if (viewselected == "week") {
    window.location.href = "timetableweek.html";
  }
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
/*login stuff*/
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
      var div = document.getElementById("displayHere");
      div.innerHTML = "Welcome Back " + username;
			return
		}
    if(username!== objPeople[i].username && password !== objPeople[i].password){
      console.log("username or password incorrect")
      var div = document.getElementById("displayHere");
      div.innerHTML = "username or password incorrect";
      return
    }
    return
	}
  return
}

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
/*slides*/
/*footer replacement*/
