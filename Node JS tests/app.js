/*
 typically in JS you can write if else this way, 
 if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} 

but we will use shortHAND
to run this install NODE JS first , Open Terminal and RUN node filename.js
*/

const age = 18;

age < 15 ? console.log("You are underage") : console.log("You are a READY");

// you want to take input from user create an HTML file. remember to link it to JS file
function getUserName() {
  var nameField = document.getElementById("nameField").value;
  var result = document.getElementById("result");

  if (nameField.length < 3) {
    result.textContent = "Username must contain at least 3 characters";
    alert("Username must contain at least 3 characters");
  } else {
    result.textContent = "Your username is: " + nameField;
    alert(nameField);
  }
}
