



let UName1 = document.getElementById("UName1");

 function checkUserName1() {
    var flag;
    if (UName1.value.length < 8 || UName1.value.length >= 20) {
   
      nameSpan1.innerText="full name length should be between 8 and 20 characters";
      flag = false;
    } else {
      flag = true;
      nameSpan1.innerText="";
    }
    console.log(flag);
    return flag;
  }
  
UName1.addEventListener('blur', checkUserName1);

// ------------------------------


let inpPassword1 = document.getElementById("inpPassword1");


function checkPassword1() {
    var flag;
    if (inpPassword1.value == '') {
    
      passwordSpan1.innerText="pasword can not empty";

      flag = false;
    } else {
      flag = true;
      passwordSpan1.innerText="";
    }
    console.log(flag);
    return flag;
}
  inpPassword1.addEventListener('blur', checkPassword1);

//   _btnReg = document.getElementById("submit");
// _btnReg.addEventListener("click", function (e) {
//     if (!(checkUserName() && checkUserNumber() && checkEmail() && checkPassword())) {
//         alert("please fill the fields with correct data")
//         e.preventDefault();
//     }
//     else {
//         storReg();
//     }
// });

_btnLog = document.getElementById("submitlogin");
_btnLog.addEventListener("click", function (ev) {
    if (!(checkUserName1() || checkPassword1())) {
        alert("please fill the fields with correct data")
        
        ev.preventDefault();
    }
    else {
        storLog();
        
    }
})
function storLog(e) {
    let RegistrationObject = {
        _loginName: document.getElementById("UName1").value,
        _loginPassword: document.getElementById("inpPassword1").value,
    };
    let RegisterFormArray = JSON.parse(localStorage.getItem('RegisterfromArray')) || [];
    let _registerData = RegisterFormArray.length && JSON.parse(localStorage.getItem('RegisterfromArray')).some(registerData =>
        registerData._Name == RegistrationObject._loginName &&
        registerData._password == RegistrationObject._loginPassword
    );
    if (_registerData) {
      location.href = "http://127.0.0.1:5500/Home.html";

        alert("Welcome");

    }
    else {
        alert("incorrect login please Registerate first");
        e.addEventListener("submit",function (ev) {
            ev.preventDefault
        })
    }
    
}

