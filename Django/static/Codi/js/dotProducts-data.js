// const data = {
//     "codis":[
//         {
//             "img": "../img/productDot1.jpg",
//             "dotsInfo": [
//                 {
//                     "dottop": "40%",
//                     "dotleft": "58%",
//                     "infotop": "37%",
//                     "infoleft": "63%",
//                     "name": "베이직 니트",
//                     "price": "25,000"
//                 },
//                 {
//                     "dottop": "40%",
//                     "dotleft": "58%",
//                     "infotop": "37%",
//                     "infoleft": "63%",
//                     "name": "바지",
//                     "price": "30,000"
//                 },
//                 {
//                     "dottop": "40%",
//                     "dotleft": "58%",
//                     "infotop": "37%",
//                     "infoleft": "63%",
//                     "name": "심플 양말",
//                     "price": "2,000"
//                 }
//             ],
//             "tags":["#겨울 심플 룩", "#개걍 첫날", "벌써 개강이라니"],
//             "explanation": '각 아이템들의 시각적 나열 순서를 결정하는 속성이예요.숫자값이 들어가며, 작은 숫자일 수록 먼저 배치됩니다. "시각적" 순서일 뿐, HTML 자체의 구조를 바꾸는 것은 아니므로 접근성 측면에서 사용에 주의하셔야 합니다. 시각 장애인분들이 사용하는 스크린 리더로 화면을 읽을 때, order를 이용해 순서를 바꾼 것은 의미가 없다는 것을 기억해 주세요.',
            
//         }
//     ]
// }

const dotData = [
    {
        "dotNum":3,
        "dotTop": ["20%", "60%", "87%"],
        "dotLeft": ["58%", "42%", "43%"],
        "infoTop": ["20%", "58%", "87%"],
        "infoLeft": ["67%", "25%", "25%"]
    },
    {
        "dotNum":3,
        "dotTop": ["40%", "67%", "87%"],
        "dotLeft": ["58%", "45%", "33%"],
        "infoTop": ["39%", "65%", "87%"],
        "infoLeft": ["65%", "52%", "40%"]
    }
]

const dots = document.querySelectorAll(".dot__dotOut");
let ind = 0;
let dotCount = 0;
dots.forEach((dot) => {
    dot.style.top = dotData[ind].dotTop[dotCount];
    dot.style.left = dotData[ind].dotLeft[dotCount];
    dotCount++;
    if(dotCount == dotData[ind].dotNum){
        ind++;
        dotCount = 0;
    }
})

const infos = document.querySelectorAll(".dot__info");
ind = 0;
dotCount = 0;
infos.forEach((info) => {
    info.style.top = dotData[ind].infoTop[dotCount];
    info.style.left = dotData[ind].infoLeft[dotCount];
    dotCount++;
    if(dotCount == dotData[ind].dotNum){
        ind++;
        dotCount = 0;
    }
})


const showMore_btn = document.querySelector(".showMore__btn");
showMore_btn.addEventListener("click", () => {
    alert("아직 구현 안됨.");
})