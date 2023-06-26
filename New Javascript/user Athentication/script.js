// Task: User Authentication
// Description: You are tasked with creating a simple user authentication system. The program will prompt the user to enter their username and password. You need to validate the input and determine whether the user is authenticated or not. Use the following guidelines:

// Prompt the user to enter their username.
// Trim any leading or trailing spaces from the input.
// Check if the username is empty. If it is, display an error message and terminate the program.
// Prompt the user to enter their password.
// Convert the password to lowercase.
// Check if the password matches a predefined secret password. If it does, display a success message. If it doesn't, display an error message.


// user authentication
const password="mypassword"
var attmeps =10;
const userName =prompt("Enter UserName").trim();
if (userName==="") {
    console.log("Please Enter Your UserName");
}else{
    const Password=prompt("Enter Your Password!")
if (Password===password) {
    console.log("Your Are Login");
}else{
    console.log("Password Is Not True");
}
}

