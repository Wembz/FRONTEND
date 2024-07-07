function ValidationForm (){

    const name = document.getElementById("Name")
    const emailAddress = document.getElementById("emailAddress")
    const password = document.getElementById("dateOfBirth")
    const dateOfBirth = document.getElementById("dateOfBirth")
  
    if(name == "" || email == "" || dateOfBirth == "" || password == "" ){
      alert ("Please fill in all field")
      return false;
    }
  
  return true
  
  }
  
  
  document.addEventListener("RegistrationForm").addEventListener ("submit",function (event) {
    event.preventDefault();
  
    if (ValidateForm()){
      document.getElementById("ConfirmationMesaage").style.display = "block";
    }
  
     
  });
  
  function resetForm() {
    document.getElementById("RegistrationForm").reset();
    document.getElementById("ConfirmationMesaage").style.display = "none";
  }
  