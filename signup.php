<?php
  $first_name = $_POST['FirstName'];
  $middle_name = $_POST['MiddleName'];
  $last_name = $_POST['LastName'];
  $date_of_birth = $_POST['DateOfBirth'];
  $gender = $_POST['Gender'];
  $country = $_POST['CountryName'];
  $address = $_POST['Address'];
  $city = $_POST['City'];
  $state = $_POST['State'];
  $phone_number = $_POST['PhoneNumber'];
  $email = $_POST['Email'];
  $password = $_POST['Password'];

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
      $SELECT = ""
    }

  }
  else {
    echo "Please fill out all required fields.";
    die();
  }
?>
