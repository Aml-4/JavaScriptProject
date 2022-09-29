let UName = document.getElementById("UName");
let users=[];
 function checkUserName() {
    var flag;
    if (UName.value.length < 8 || UName.value.length >= 20) {
   
      nameSpan.innerText="full name length should be between 8 and 20 characters";
      flag = false;
    } else {
      flag = true;
      nameSpan.innerText="";
    }
    console.log(flag);
    return flag;
  }
  
UName.addEventListener('blur', checkUserName);

function checkPassword() {
    var flag;
    if (inpPassword.value == '') {
    
      passwordSpan.innerText="pasword can not empty";

      flag = false;
    } else {
      flag = true;
      passwordSpan.innerText="";
    }
    console.log(flag);
    return flag;
}
  inpPassword.addEventListener('blur', checkPassword);

  
function checkUserNumber() {
    var checkNum="";
    var numbReg = /^(01)[0-25][0-9]{8}$/;
    if (!numbReg.test(inpNum.value)) {
      //    &&(e.which >= 108 || e.which <= 95)
      
      
      numberSpan.innerText="plz enter valid number";

      checkNum = false;
    } else {
      checkNum = true;
      numberSpan.innerText="";
    }
    console.log(checkNum);
    return checkNum;
  }
  
  
  function checkEmail() {
    var emailFlag;
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(inpEmail.value)) {
      
      emailSpan.innerText="incorrect Email";
      
      emailFlag = false;
    } else {
      emailFlag = true;
      emailSpan.innerText="";
    }
    console.log(emailFlag);
    return emailFlag;
  }
  inpEmail.addEventListener('blur', checkEmail);
  inpNum.addEventListener('blur', checkUserNumber);
  



_btnReg = document.getElementById("submit");
_btnReg.addEventListener("click", function (e) {
    if (!(checkUserName() && checkUserNumber() && checkEmail() && checkPassword())) {
        alert("please fill the fields with correct data")
        e.preventDefault();
    }
    else {
        storReg();
    }
});


  


 function storReg() {
    let RegistrationObject = {
        _Name: document.getElementById("UName").value,
        _password: document.getElementById("inpPassword").value,
        _email: document.getElementById("inpEmail").value,
        _phone: document.getElementById("inpNum").value,
    }
    let RegisterFormArray = JSON.parse(localStorage.getItem('RegisterfromArray')) || [];
    let _registerData = RegisterFormArray.length && JSON.parse(localStorage.getItem('RegisterfromArray')).some(registerData =>
        registerData._email == RegistrationObject._email);

    if (!_registerData) {
        RegisterFormArray.push(RegistrationObject)
        localStorage.setItem('RegisterfromArray', JSON.stringify(RegisterFormArray))
        alert("you registerated successfully, you can log in now");
    }
    else {
      alert("you already have an account, please log in");
      return;
    }
}













