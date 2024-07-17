<?php
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$pwd=$_POST['pwd'];
$epwd=password_hash($pwd, PASSWORD_DEFAULT);

$conn= new mysqli('localhost','root','','registration');
if($conn->connect_error){
    die('Connection Failed:'.$conn->connect_error);
}else{
    $stt="SELECT * FROM users WHERE phone='$phone' OR email='$email'";
    $result=mysqli_query($conn,$stt);
    if (mysqli_num_rows($result)<1){
    $stmt =$conn->prepare ("INSERT INTO users(fname, lname, email,pwd, phone ) VALUES(?,?,?,?,?);");
 $stmt->bind_param("sssss",$fname, $lname, $email, $epwd, $phone );
 $stmt->execute();
echo "<h1>Welcome $fname!</h1>";
echo "<p>Your details have been successfully registered.</p>";
echo "<p>First Name: $fname</p>";
echo "<p>Last Name: $lname</p>";
echo "<p>Email: $email</p>";
echo "<p>Phone Number: $phone</p>";
$stmt->close();
}else{
    echo"user with same email/phone already exists";
}

 $conn->close();
}
?>