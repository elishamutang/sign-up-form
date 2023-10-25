// Target password inputs
const pwd = document.getElementById("userPwd");
const pwdConfirm = document.getElementById("userPwdConfirm");

// Detects user input
pwd.addEventListener("change", checkPwd);
pwdConfirm.addEventListener("change", checkPwd);

pwd.addEventListener("input", checkPwd);
pwdConfirm.addEventListener("input", checkPwd);

// Compare between the two password fields.
function checkPwd(e) {

    const pwdError = document.querySelectorAll("div.formInput span.error");

    if(pwd.value == pwdConfirm.value) {
        
        pwdError.forEach((error) => {
            error.style.display = "none";
        })

    } else {

        pwd.setAttribute("class", "error");
        pwdConfirm.setAttribute("class", "error");

        pwdError.forEach((error) => {
            error.style.display = "";
        })

    }
}
