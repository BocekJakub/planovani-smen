<?php
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $vacan = $_POST["vacan"];
    $fpd = $_POST["fpd"];
    $position = $_POST["position"];
    $shift = $_POST["shift"];

    $connection = mysqli_connect("localhost", "root", "", "nopis");

    $query = "INSERT INTO users (username, email, passw, vac, fpd, post, shift) VALUES ('$fullname','$email','$password','$vacan','$fpd','$position','$shift')";

    $result = mysqli_query($connection,$query);

    if(!$result){
        die("Dotaz do databáze selhal");
    }

    header("Location:index.html");

?>