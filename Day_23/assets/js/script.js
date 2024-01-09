var btn = document.querySelector(".btn");
var loginRegister = document.querySelector(".login-register");
var overlay = document.querySelector(".overlay");

// Login

var login = document.querySelector(".login-register .wrapper .login");
var loginPassword = document.querySelector(
  ".login-register .wrapper .login .password-login"
);
var loginEmail = document.querySelector(
  ".login-register .wrapper .login .email-login"
);
var loginPasswordError = document.querySelector(
  ".login-register .wrapper .login .password-error"
);
var loginEmailError = document.querySelector(
  ".login-register .wrapper .login .email-error"
);
var eyeLogin = document.querySelector(".login-register .wrapper .login .eye");
var btnLogin = document.querySelector(
  ".login-register .wrapper .btn-wrapper .login-btn"
);

// Register

var register = document.querySelector(".login-register .wrapper .register");
var registerName = document.querySelector(
  ".login-register .wrapper .register .name"
);
var registerEmail = document.querySelector(
  ".login-register .wrapper .register .email-register"
);
var registerPassword = document.querySelector(
  ".login-register .wrapper .register .password-register"
);
var registerNameError = document.querySelector(
  ".login-register .wrapper .register .name-error"
);
var registerPasswordError = document.querySelector(
  ".login-register .wrapper .register .password-error"
);
var registerEmailError = document.querySelector(
  ".login-register .wrapper .register .email-error"
);
var eyeRegister = document.querySelector(
  ".login-register .wrapper .register .eye"
);
var btnRegister = document.querySelector(
  ".login-register .wrapper .btn-wrapper .register-btn"
);

// Events

var closeLoginRegister = function () {
  loginRegister.classList.remove("show");
};
btn.addEventListener("click", function () {
  loginRegister.classList.add("show");
});
overlay.addEventListener("click", closeLoginRegister);
btnRegister.addEventListener("click", function () {
  login.classList.remove("show");
  btnRegister.style.background = "#fff";
  loginEmail.value = "";
  loginPassword.value = "";
  registerNameError.innerText = "";
  registerEmailError.innerText = "";
  registerPasswordError.innerText = "";
});
btnLogin.addEventListener("click", function () {
  login.classList.add("show");
  btnLogin.style.background = "#fff";
  btnRegister.style.background = "#F9F9F9";
  registerName.value = "";
  registerEmail.value = "";
  registerPassword.value = "";
  loginEmailError.innerText = "";
  loginPasswordError.innerText = "";
});
btnRegister.addEventListener("click", function () {
  register.classList.add("show");
  btnRegister.style.background = "#fff";
  btnLogin.style.background = "#F9F9F9";
});
btnLogin.addEventListener("click", function () {
  register.classList.remove("show");
});
eyeLogin.addEventListener("click", function () {
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
    eyeLogin.src = "./assets/images/eye-icon.png";
  } else {
    loginPassword.type = "password";
    eyeLogin.src = "./assets/images/eye-lock.png";
  }
});
eyeRegister.addEventListener("click", function () {
  if (registerPassword.type === "password") {
    registerPassword.type = "text";
    eyeRegister.src = "./assets/images/eye-icon.png";
  } else {
    registerPassword.type = "password";
    eyeRegister.src = "./assets/images/eye-lock.png";
  }
});

// Check error login form
function checkErrorLogin() {
  var re = /\S+@\S+\.\S+/;
  if (loginEmail.value === "") {
    loginEmailError.innerText = "Vui lòng nhập thông tin";
    loginEmail.style.marginBottom = "5px";
    loginEmailError.style.marginBottom = "20px";
  } else if (!re.test(loginEmail.value)) {
    loginEmailError.innerText = "Vui lòng nhập đúng định dạng email";
  } else {
    loginEmailError.innerText = "";
    loginEmail.style.marginBottom = "20px";
    loginEmailError.style.marginBottom = "0";
  }
  if (loginPassword.value === "") {
    loginPasswordError.innerText = "Vui lòng nhập thông tin";
    loginPassword.style.marginBottom = "5px";
    loginPasswordError.style.marginBottom = "20px";
  } else {
    loginPasswordError.innerText = "";
    loginPassword.style.marginBottom = "20px";
    loginPasswordError.style.marginBottom = "0";
  }
}
loginRegister.addEventListener("keyup", checkErrorLogin);
loginEmail.addEventListener("blur", checkErrorLogin);
loginPassword.addEventListener("blur", checkErrorLogin);

// Check error in register form

function checkErrorRegister() {
  if (registerName.value === "") {
    registerNameError.innerText = "Vui lòng nhập thông tin";
    registerName.style.marginBottom = "5px";
    registerNameError.style.marginBottom = "20px";
  } else {
    registerNameError.innerText = "";
    registerName.style.marginBottom = "20px";
    registerNameError.style.margin = "0";
  }
  var re = /\S+@\S+\.\S+/;
  if (registerEmail.value === "") {
    registerEmailError.innerText = "Vui lòng nhập thông tin";
    registerEmail.style.marginBottom = "5px";
    registerEmailError.style.marginBottom = "20px";
  } else if (!re.test(registerEmail.value)) {
    registerEmailError.innerText = "Vui lòng nhập đúng định dạng email";
    registerEmail.style.marginBottom = "5px";
  } else {
    registerEmailError.innerText = "";
    registerEmail.style.marginBottom = "20px";
    registerEmailError.style.marginBottom = "0";
  }
  if (registerPassword.value === "") {
    registerPasswordError.innerText = "Vui lòng nhập thông tin";
    registerPassword.style.marginBottom = "5px";
    registerPasswordError.style.marginBottom = "20px";
  } else if (
    registerPassword.value.split("").length < 6 ||
    registerPassword.value.split("").length > 20
  ) {
    registerPasswordError.innerText = "Mật khẩu chỉ từ 6 - 20 ký tự";
    registerPassword.style.marginBottom = "5px";
    registerPasswordError.style.marginBottom = "20px";
  } else {
    registerPasswordError.innerText = "";
    registerPassword.style.marginBottom = "20px";
    registerPasswordError.style.marginBottom = "0";
    console.log(registerPassword.value.split("").length);
  }
}
loginRegister.addEventListener("keyup", checkErrorRegister);
registerName.addEventListener("blur", checkErrorRegister);
registerEmail.addEventListener("blur", checkErrorRegister);
registerPassword.addEventListener("blur", checkErrorRegister);
