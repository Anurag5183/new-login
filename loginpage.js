function formvalidation() {
  // reset all error message
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";


  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("Password").value.trim();

  if (username === "admin" && password === "password") {
    window.location.href = "portfolio.html";
  } if(username !== "admin" ) {
    document.getElementById("usernameError").innerHTML = "User name not Valid";
  }
  if(password !== "password"){
    document.getElementById("passwordError").innerHTML = "Password invalid";
  }
  else if(username !== "admin" || password !== "password"){
    alert("username and password Invalid");
  }
  return false;
}
