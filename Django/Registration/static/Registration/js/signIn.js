//id확인. 조건에 맞으면 true, 그렇지 않으면 false 리턴. 나머지도 다 같은식.
function checkId (id) 
{
    const value = this.value || id.value; //콜백함수와 그냥 함수 둘다 동작하도록 하기 위해.
    const idErrMesg = document.querySelector("#id_err_mesg");
    const check = /^[a-z0-9_-]{5,20}$/g; //정규표현식.

    //이미 사용중이거나 탈퇴한 아이디입니다. <- 아직 구현 못했어요.
    if(!value){ //입력 안함.
        console.log("id: empty");
        idErrMesg.style.display = "block";
        idErrMesg.textContent = "필수 정보입니다.";
        return false;
    }
    else if(!check.test(value)){ //조건에 어긋남.
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

function checkPw (pw)
{
    const value = this.value || pw.value;
    const pwErrMesg = document.querySelector("#pw_err_mesg");
    const check1 = /^[a-z0-9^!@#$%^&*\?]{8,16}$/g;
    const check2 = /[a-zA-Z]+/g; //영문자 최소한 하나는 있어야함.
    const check3 = /[0-9]+/g; //숫자도 마찬가지.

    console.log(value);
    //반복되는 비번 못하게하는거 아직 구현 안됐습니다. /(\w)\1\1/.test(mbrPwd)        
    if(!value){ //미입력.
        console.log("pw: empty");
        pwErrMesg.style.display = "block";
        pwErrMesg.textContent = "필수 정보입니다.";
        return false;
    }
    else if(!check1.test(value) || !check2.test(value) || !check3.test(value)){ //조건에 어긋남.
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

function checkPw2 (pw2)
{
    const value = this.value || pw2.value;
    const pwErrMesg = document.querySelector("#pw2_err_mesg");

    console.log(value);
    //가입하게 버튼 누를 때 비번 일치하는지 확인 하고 버튼 누를 수 있게 해주세요.
    //ㄴ완료.
    if(!value){ //미입력.
        console.log("pw2: empty");
        pwErrMesg.style.display = "block";
        pwErrMesg.textContent = "필수 정보입니다.";
        return false;
    }
    else if(value !== pw.value){ //비번이 일치하지 않음.
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

    if(!value){ //미입력.
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


// function checkYear (yy)
// {
//     const value = this.value || yy.value;
//     const birthErrMesg = document.querySelector("#birth_err_mesg");

//     if(!value){ //미입력.
//         console.log("yy: empty");
//         birthErrMesg.style.display = "block";
//         birthErrMesg.textContent = "년도를 입력하세요.";
//         return false;
//     }
//     else{
//         console.log("yy: ok");
//         birthErrMesg.style.display = "none";
//         return true;
//     }
// }

// function checkMonth (mm)
// {
//     const value = this.value || mm.value;

//     const birthErrMesg = document.querySelector("#birth_err_mesg");
//     console.log(value);

//     if(value === "Un"){ //미입력.
//         console.log("mm: empty");
//         birthErrMesg.style.display = "block";
//         birthErrMesg.textContent = "월을 입력하세요.";
//         return false;
//     }
//     else{
//         console.log("mm: ok");
//         birthErrMesg.style.display = "none";
//         return true;
//     }
// }

// function checkDay (dd)
// {
//     const value = this.value || dd.value;
//     const birthErrMesg = document.querySelector("#birth_err_mesg");
//     const calender = [0,31,28,31,30,31,30,31,31,30,31,30,31];
//     console.log(mm.value);

//     if(!value){ //미입력.
//         console.log("dd: empty");
//         birthErrMesg.style.display = "block";
//         birthErrMesg.textContent = "일을 입력하세요.";
//         return false;
//     }
//     else if(checkMonth(mm) && checkYear(yy)){ //월과 년이 입력되어있다면, 날짜가 범위에 맞는지 확인.
//         // console.log("진입");
//         if(value < 0 || calender[mm.value] < value){ //날짜 제대로 입력했는지 확인
//             const isyeap = (yy.value % 4 == 0 && yy.value % 100 != 0) || yy.value % 400 == 0;
//             if(!(isyeap && value === 29)){ //윤년의 29일이었는지 확인
//                 console.log("dd2: out of");
//                 birthErrMesg.style.display = "block";
//                 birthErrMesg.textContent = "일을 다시 확인해주세요.";
//                 return false;
//             }
//         }
//         else{
//             console.log("dd2: ok");
//             birthErrMesg.style.display = "none";
//             return true;
//         }
//     }
//     else{
//         console.log("dd: ok");
//         birthErrMesg.style.display = "none";
//         return true;
//     }
// }


const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const pw2 = document.querySelector("#pw2");
const userName = document.querySelector("#user_name");
// const yy = document.querySelector("#yy");
// const mm = document.querySelector("#mm");
// const dd = document.querySelector("#dd");

document.addEventListener("DOMContentLoaded", () => {
    //아이디
    id.addEventListener("blur", checkId);

    //비밀번호
    pw.addEventListener("blur", checkPw);
    pw2.addEventListener("blur", checkPw2);
    
    //이름
    userName.addEventListener("blur", checkName);

    //생년월일    
    // yy.addEventListener("blur", checkYear);
    // mm.addEventListener("blur", checkMonth);
    // dd.addEventListener("blur", checkDay);

    //가입하기 버튼 눌렀을 때 최종확인.
    const joinBtn = document.querySelector("#joinBtn")
    joinBtn.addEventListener("click", () => {
        const check = checkId(id) && checkPw(pw) && checkPw2(pw2) && checkName(userName); 
        // && checkYear(yy) && checkMonth(mm) && checkDay(dd, mm, yy);

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