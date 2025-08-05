let email = document.getElementById("email");
let password = document.getElementById("password");
let error1 = document.getElementById("err1");

// Email regex
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Password regex
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?!.*\s).{8,}$/;

function validate(){
    if(email.value==''){
       
        alert("Email field can't be empty");
     return false;
    }
    if(password.value==''){
       
        alert("Password field can't be empty");
     return false;
    }
    
    
    else{
        if (!emailRegex.test(email.value)) {
    alert("Invalid email format");
    return false;
   
  }

  if (!passwordRegex.test(password.value)) {
    alert("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
    return false;
  }
  else{
    alert("Form submitted sucessfully");
     window.location.href = "homepage.html";
  return false;
  }    
    }  
}




