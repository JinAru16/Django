function checkId (id) 
{
    const value = this.value || id.value;
    const idErrMesg = document.querySelector("#id_err_mesg");
    const check = /^[a-z0-9_-]{5,20}$/g;

    //이미 사용중이거나 탈퇴한 아이디입니다. <- 아직 구현 못했어요.
    if(!value){
        console.log("id: empty");
        idErrMesg.style.display = "block";
        idErrMesg.textContent = "필수 정보입니다.";
        return false;
    }
    else if(!check.test(value)){
        console.log("id: out of rule");
        idErrMesg.style.display = "block";
        idErrMesg.textContent = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        return false;
    }
    else{
        console.log("id: ok");
        idErrMesg.style.display = "none";
        return true;
    }
}

function checkPw ()
{
    const value = this.value || pw.value;
    const pwErrMesg = document.querySelector("#pw_err_mesg");
    const check1 = /^[a-z0-9^!@#$%^&*\?]{8,16}$/g;
    const check2 = /[a-zA-Z]+/g;
    const check3 = /[0-9]+/g;

    console.log(value);
    //반복되는 비번 못하게하는거 아직 구현 안됐습니다. /(\w)\1\1/.test(mbrPwd)        
    if(!value){
        console.log("pw: empty");
        pwErrMesg.style.display = "block";
        pwErrMesg.textContent = "필수 정보입니다.";
        return false;
    }
    else if(!check1.test(value) || !check2.test(value) || !check3.test(value) ){
        console.log("pw: out of rule");
        pwErrMesg.style.display = "block";
        pwErrMesg.textContent = "8~16자 영문 대 소문자, 숫자를 사용하세요.";
        return false;
    }
    else{
        console.log("pw: ok");
        pwErrMesg.style.display = "none";
        return true;
    }
}

function checkPw2 ()
{
    const value = this.value || pw2.value;
    const pwErrMesg = document.querySelector("#pw2_err_mesg");

    console.log(value);
    //가입하게 버튼 누를 때 비번 일치하는지 확인 하고 버튼 누를 수 있게 해주세요.
    if(!value){
        console.log("pw2: empty");
        pwErrMesg.style.display = "block";
        pwErrMesg.textContent = "필수 정보입니다.";
        return false;
    }
    else if(value !== pw.value){
        console.log("pw2: out of rule");
        pwErrMesg.style.display = "block";
        pwErrMesg.textContent = "비밀번호가 일치하지 않습니다.";
        return false;
    }
    else{
        console.log("pw2: ok");
        pwErrMesg.style.display = "none";
        return true;
    }
}

function checkName (userName) //얘만 userName 없다고 그러네..
{
    // console.log(userName.value);
    const value = this.value || userName.value;
    const nameErrMesg = document.querySelector("#name_err_mesg");

    if(!value){
        console.log("name: empty");
        nameErrMesg.style.display = "block";
        nameErrMesg.textContent = "필수 정보입니다.";
        return false;
    }
    else{
        console.log("name: ok");
        nameErrMesg.style.display = "none";
        return true;
    }
}


function checkYear (yy)
{
    const value = this.value || yy.value;
    const birthErrMesg = document.querySelector("#birth_err_mesg");
    if(!value){
        console.log("yy: empty");
        birthErrMesg.style.display = "block";
        birthErrMesg.textContent = "년도를 입력하세요.";
        return false;
    }
    else{
        console.log("yy: ok");
        birthErrMesg.style.display = "none";
        return true;
    }
}

function checkMonth (mm)
{
    let ind = 0;
    if(this.options.selectedIndex || this.options.selectedIndex === 0){
        ind = this.options.selectedIndex
    }
    else{
        ind = mm.options.selectedIndex;
    }
    const birthErrMesg = document.querySelector("#birth_err_mesg");
    // console.log(options[ind].textContent);

    if(ind === 0){
        console.log("mm: empty");
        birthErrMesg.style.display = "block";
        birthErrMesg.textContent = "월을 입력하세요.";
        return false;
    }
    else{
        console.log("mm: ok");
        birthErrMesg.style.display = "none";
        return true;
    }
}

function checkDay (dd)
{
    const value = this.value || dd.value;
    const birthErrMesg = document.querySelector("#birth_err_mesg");
    const calender = [0,31,28,31,30,31,30,31,31,30,31,30,31];

    if(!value){
        console.log("dd: empty");
        birthErrMesg.style.display = "block";
        birthErrMesg.textContent = "일을 입력하세요.";
        return false;
    }
    else{
        console.log("dd: ok");
        birthErrMesg.style.display = "none";
        return true;
    }
    console.log(mm.value);
    // console.log(mm.value);
    if(mm.options.selectedIndex && yy.value){
        console.log("진입");
        if(value < 0 || calender[mm.options.selectedIndex] < value){
            const isyeap = (yy.value % 4 == 0 && yy.value % 100 != 0) || yy.value % 400 == 0;
            if(!isyeap || value !== 29){
                console.log("dd2: out of");
                birthErrMesg.style.display = "block";
                birthErrMesg.textContent = "일을 다시 확인해주세요.";
            }
        }
        else{
            console.log("dd2: ok");
            birthErrMesg.style.display = "none";
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const id = document.querySelector("#id");
    const pw = document.querySelector("#pw");
    const pw2 = document.querySelector("#pw2");
    const userName = document.querySelector("#user_name");
    const yy = document.querySelector("#yy");
    const mm = document.querySelector("#mm");
    const dd = document.querySelector("#dd");


    //아이디
    id.addEventListener("blur", checkId)

    //비밀번호
    pw.addEventListener("blur", checkPw);
    pw2.addEventListener("blur", checkPw2);
    
    //이름
    userName.addEventListener("blur", checkName)

    //생년월일    
    yy.addEventListener("blur", checkYear)
    mm.addEventListener("blur", checkMonth)
    dd.addEventListener("blur", checkDay)


    const formTag = document.querySelector("form");
    const joinBtn = document.querySelector("#joinBtn")

    joinBtn.addEventListener("click", (event) => {
        let check = false;
        check = checkId(id) && checkPw(pw) && checkPw2(pw2) && checkName(userName) && 
            checkYear(yy) && checkMonth(mm) && checkDay(dd);

        if(check){
            joinBtn.disabled=false;
        }
        else{
            joinBtn.disabled = true;
            setTimeout(()=>{
                joinBtn.disabled=false;
            }, 100)
        }

    })
})