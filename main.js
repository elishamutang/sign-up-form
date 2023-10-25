// Target password inputs
const pwd = document.getElementById("userPwd");
const pwdConfirm = document.getElementById("userPwdConfirm");

// Target 'Create Account' button
const createAcc = document.querySelector("button");

pwd.addEventListener("change", checkPwd);
pwdConfirm.addEventListener("change", checkPwd);

pwd.addEventListener("input", checkPwd);
pwdConfirm.addEventListener("input", checkPwd);


function checkPwd(e) {
    console.log(e.target.value);
    console.log(pwdConfirm.value);

    if(pwd.value == pwdConfirm.value) {
        console.log("true");
    } else {
        console.log("false");
        pwd.setAttribute("class", "error");
        pwdConfirm.setAttribute("class", "error");
    }
}
