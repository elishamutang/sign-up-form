const pwd = document.getElementById("userPwd");
const pwdConfirm = document.getElementById("userPwdConfirm");

const createAcc = document.querySelector("button");

pwd.addEventListener("change", doSomething);
pwdConfirm.addEventListener("change", doSomething);

pwd.addEventListener("input", doSomething);
pwdConfirm.addEventListener("input", doSomething);


function doSomething(e) {
    console.log(e.target.value);
    console.log(pwdConfirm.value);

    if(pwd.value == pwdConfirm.value) {
        console.log("true");
    } else {
        console.log("false");
    }
}
