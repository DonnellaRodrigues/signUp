<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sing Up Page</title>
    <link rel="stylesheet" href="./style.css">
    
</head>
<body>
    <div class="container myForm">
        <form id="form" action="./conn.php" method="post" >
            <h1>Registration</h1>
            <div class="input-control">
                <input id="fname" name="fname" type="text" placeholder="First Name">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <input id="lname" name="lname" type="text" placeholder="Last Name">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <input id="phone" name="phone" type="text" placeholder="Phone Number">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <input id="email" name="email" type="text" placeholder="Email">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <input id="pwd" name="pwd" type="password " placeholder="Enter password">
                <div class="error"></div>
            </div>
            <div class="input-control">
                <input id="rpwd"name="rpwd" type="password" placeholder="Confirm Password">
                <div class="error"></div>
            </div>
            <button type="submit" onclick="validateInputs()">Sign Up</button>
        </form>
        <div class="container">
    </div>
    <script defer src="./validation.js"></script>
</body>
</html>