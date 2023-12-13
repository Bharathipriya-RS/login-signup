const formOpenBtn = document.querySelector("#form-open"),
    home=document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close")
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pwd_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

pwShowHide.forEach(icont => {
    icont.addEventListener("click",()=>{
        let getPwInput = icont.parentElement.querySelector("input");
        if(getPwInput.type==="password"){
            getPwInput.type="text";
            icont.classList.replace("uil-eye-slash", "uil-eye");
        }else{
            getPwInput.type="password";
            icont.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});