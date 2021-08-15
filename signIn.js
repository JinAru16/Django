document.addEventListener("DOMContentLoaded", () => {
    const pwBox = document.querySelector("#pwBox");
    const pw2Box = document.querySelector("#pw2Box");
    const birthBoxs = document.querySelector("#birthBoxs");
    const genderBox = document.querySelector("#genderBox");
    
    const id = document.querySelector("#id");
    
    id.addEventListener("blur", () => {
        console.log("out of");
        const idErrMesg = document.querySelector("#id_err_mesg");
        const value = id.value;
        const check = /^[a-z0-9]{6,20}$/g;

        if(!value || !check.test(value)){
            console.log("empty");
            idErrMesg.style.display = "block";
        }
        else{
            console.log("ok");
            idErrMesg.style.display = "none";
        }
    })
})