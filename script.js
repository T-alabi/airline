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
/*seats booking classes*/
function FirstClassSeats() {
document.getElementById("firstclass").style.display= "";
document.getElementById("businessClass").style.display="none";
document.getElementById("econclass").style.display="none";
}
function BussClassSeats() {
  document.getElementById("businessClass").style.display= "";
  document.getElementById("firstclass").style.display= "none";
  document.getElementById("econclass").style.display="none";
}
function EconClassSeats() {
  document.getElementById("econclass").style.display= "";
  document.getElementById("firstclass").style.display= "none";
  document.getElementById("businessClass").style.display="none";
}
function flightBooked() {
document.getElementById("tempText").style.display="none";
//var firstclass;
//var businessClass;
//var econclass;
var firstName;
var lastName;
var date;
//var firstclass = document.getElementById("firstclass").value;
//var businessClass = document.getElementById("businessClass").value;
//var econclass = document.getElementById("econclass").value;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var date = document.getElementById("date").value;
document.getElementById("flightshere").innerHTML = firstName + '  '+ lastName + '<br/>' + ' You Have Booked One Flight On ' + date;
}

function findTrips() {
document.getElementById("tempText").style.display= "none";
//document.getElementById("flightshere").innerHTML = "You have not been on any flight. Check out the home page for popular destinations"
var firstName;
var lastName;
var confirmationNumber;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var confirmationNumber = document.getElementById("confirmationNumber").value;
document.getElementById("flightshere").innerHTML = firstName + ' ' + lastName + '<br/>' + 'You Have Been On 1 Flight' + '<br/>' + confirmationNumber + ' From: Newark Liberty International Airport ' + '<br/>' + 'To: John F. Kennedy International Airport ';
}

function tripstat() {
  document.getElementById("tempText2").style.display= "none";
  var flightNum;
  var fromlocations;
  var toLocations;
  var date;
  var date = document.getElementById("date").value;
  var toLocations = document.getElementById("toLocations").value;
  var fromlocations = document.getElementById("fromlocations").value;
  var flightNum = document.getElementById("flightNumber").value;
  document.getElementById("status").innerHTML = ' Flight number ' + flightNum + ' on ' + date + ' from ' + fromlocations + ' to ' + toLocations + ' has been cancelled ';
}
