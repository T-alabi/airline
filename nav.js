var html = '<div id="header"  class="navbar navbar-expand-sm"> ' +
    '<div class="navbar navbar-expand-sm">' +
      '<a href="home.html" class="text-decoration-none " id="airlineSign">VENTUS AIRLINES</a>'+
      '<a href="aboutus.html" class="navigation nav-item text-decoration-none">ABOUT US</a>'+
      '<a href="jointheteam.html" class="navigation nav-item text-decoration-none">JOIN THE TEAM</a>'+
      '<div class="dropdown text-decoration-none">'+
        '<button class="navigation nav-item text-decoration-none" id="dropbtn">FLIGHT INFORMATION</button>'+
        '<div class="dropdown-content">'+
        '  <a href="book.html" class="navigation nav-item text-decoration-none">BOOK A FLIGHT</a>' +
        '  <a href="mytrips.html" class="navigation nav-item text-decoration-none">MY TRIPS</a>'+
          '<a href="flightstatus.html" class="navigation nav-item text-decoration-none">FLIGHT STATUS</a>'+
          '<a href="timetable.html" class="navigation nav-item text-decoration-none">TIMETABLE</a>'+
        '</div>'+
      '</div>'+
      '<a href="frequentflyerprogram.html" class="navigation nav-item text-decoration-none">FREQUENT FLYER PROGRAM</a>'+
      '<button id="Login" class="navigation nav-item text-decoration-none" onclick="OpenLogin();">LOGIN</button>'+
      '<a href="signup.html" class="navigation nav-item text-decoration-none">SIGN UP</a>'+
    '</div>' +
  '</div>'
           ;
document.getElementById('nav').innerHTML = html;
/*footer replacement*/
var footer;
footer =
'<div class="socialMedia" >' +
  '<h5>Social Media</h5>'+
  '<a href="https://www.facebook.com/" class="SocialLink" target="_blank"><img src="images/facebook.png" style="height: 35px; width: 35px;"></a>'+
  '<a href="https://www.instagram.com/?hl=en" class="SocialLink" target="_blank"><img src="images/instagram.png" style="height: 35px; width: 35px;"></a>'+
  '<a href="https://twitter.com/" class="SocialLink" target="_blank"><img src="images/twitter.png" style="height: 35px; width: 35px;"></a>'+
  '<a href="https://www.google.com/gmail/about/" class="SocialLink" target="_blank">Questions? Email Us!</a>'+
'</div>'+
'<div class="credits">'+
  '<h5>Credits</h5>'+
    '<a href="credits.html" class="sources SocialLink">Sources & etc.</a>'+
    '<a href="PrivacyPolicy.html" class="sources SocialLink">Privacy Policy</a> <!--[CREATE PAGE]-->'+
    '<a href="TermsConditions.html" class="sources SocialLink">Terms and Conditions</a>'+
'</div>'
          ;
document.getElementById('footerContainer').innerHTML = footer;
/*seat not avaoabe alert*/
function notAvailableAlert (){
  alert("This seat is not available to allow for social distancing during the flight. Please click an available seat, indicated by the light grey color.");
}

function ConfrimSeat() {
  document.getElementById('ConfirmMessage').innerHTML = "One seat has been selected, fill out the information below and submit."
}
