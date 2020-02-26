<?php
  # failed attempt to connect to database
  /*
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $date_of_birth = $_POST['date_of_birth'];
  $gender = $_POST['gender'];
  $country = $_POST['country'];
  $address = $_POST['address'];
  $city = $_POST['city'];
  $state = $_POST['state'];
  $phone_number = $_POST['phone_number'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  if (!empty($first_name) || !empty($last_name) || !empty($date_of_birth) || !empty($gender) || !empty($country) || !empty($address) || !empty($city) || !empty($state) || !empty($phone_number) || !empty($email) || !empty($password)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "ventusairlines";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()) {
      die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
    }
    else {
      $SELECT = "SELECT email From passengers Where email = ? Limit 1";
      $INSERT = "INSERT Into passengers (first_name, last_name, date_of_birth, gender, country, address, city, state, phone_number, email, password) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      $stmt = $conn->prepare($SELECT);
      $stmt->bind_param("s", $email);
      $stmt->execute();
      $stmt->bind_result($email);
      $stmt->store_result();
      $rnum = $stmt->num_rows;

      if ($rnum==0) {
        $stmt->close();

        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ssssssssiss", $first_name, $last_name, $date_of_birth, $gender, $country, $address, $city, $state, $phone_number, $email, $password);
        $stmt->execute();
        echo "New record inserted successfully";
      }
      else {
        echo "Someone already registered using this email";
      }
      $stmt->close();
      $conn->close();
    }
  }
  else {
    echo "Please fill out all required fields.";
    die();
  }
  */
  
?>
