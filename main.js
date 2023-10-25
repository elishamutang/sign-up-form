const pwd = document.getElementById("userPwd");
const pwdConfirm = document.getElementById("userPwdConfirm");

const createAcc = document.querySelector("button");

pwd.addEventListener("change", doSomething);
pwdConfirm.addEventListener("change", doSomething);

function doSomething(e) {
    console.log(e.target.value);
    console.log(pwdConfirm.value);
}
