let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phno = document.getElementById("phno");
let password = document.getElementById("password");
// Email regex
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Password regex
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?!.*\s).{8,}$/;

//Phno regex
let phnoRegex = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;


function validate(){
     if(fname.value==''){
       
        alert("First name field can't be empty");
     return false;
    }
     if(lname.value==''){
       
        alert("Last name field can't be empty");
     return false;
    }
    if(email.value==''){
       
        alert("Email field can't be empty");
     return false;
    }
     if(phno.value==''){
       
        alert("Please provide number");
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
 if (!phnoRegex.test(phno.value)) {
  alert("Phone number must be 10 digits or in formats: XXX-XXX-XXXX, XXX.XXX.XXXX, or XXX XXX XXXX");
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

function eye() {
  let eyeicon = document.getElementById('eyeicon');
  let password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
    eyeicon.src = "js/img/eyeopenwhite.png";
  } else {
    password.type = "password";
    eyeicon.src = "js/img/eyeclosegreen.png";
  }
}


function checkStrength() {
  const password = document.getElementById("password").value;
  const strengthMsg = document.getElementById("strengthMsg");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W_]/.test(password)) strength++;

  if (password.length === 0) {
    strengthMsg.innerText = '';
  } else if (strength <= 2) {
    strengthMsg.innerText = 'Poor';
    strengthMsg.style.color = 'red';
  } else if (strength === 3 || strength === 4) {
    strengthMsg.innerText = 'Medium';
    strengthMsg.style.color = 'orange';
  } else if (strength === 5) {
    strengthMsg.innerText = 'Strong';
    strengthMsg.style.color = 'lightgreen';
  }
}


