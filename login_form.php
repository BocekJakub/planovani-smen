<?php
    $name = $_POST["name"];
    $password = $_POST["password"];

    $connection = mysqli_connect("localhost", "root", "", "test");

    $query = "SELECT * FROM login";

    $result = mysqli_query($connection,$query);

    if(!$result){
        die("Dotaz do databáze selhal");
    }

    while($row = mysqli_fetch_array($result)){ 
        if(($name == $row['name']) && ($password == $row['password'])){
            header("Location:index.html");
        } else {
            header("Location:login.html");
            echo '<script language="javascript">';
            echo 'alert("message successfully sent")';
            echo '</script>';
        }
    }
    



?>