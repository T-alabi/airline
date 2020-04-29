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
