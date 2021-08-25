"use strict"

const reviewArr = {
    total: {
        star: 4.8,
        num: 1235
    },
    user: [
        {
            star: 4.5,
            id: "aaa123",
            date: "2020.03.21",
            product: "줄무늬 티셔츠",
            review: "데일리로 입기 좋아요. 다들 어디서 샀냐고 물어보네요ㅎㅎ. 번창하세요"
        },
        {
            star: 3.0,
            id: "bbb123",
            date: "2021.05.18",
            product: "줄무늬 티셔츠",
            review: "마감이 별로예요."
        }   
    ]
};

const reviewList = document.querySelector(".reviewList");
for(let i=0; i<reviewArr.user.length; i++){
    let unit = document.createElement("div");
    unit.id = i+1;
    unit.className = "review__unit";

    const userArr = reviewArr.user;
    unit.innerHTML = `
        <div class="review__star"><p>${userArr[i].star}</p></div>
        <div class="review__id_date"><p>${userArr[i].id} / ${userArr[i].date}</p></div>
        <div class="review__productName"><p>${userArr[i].product}</p></div>
        <div class="review__content"><p>${userArr[i].review}</p></div>
    `;
    reviewList.appendChild(unit);

    if(i !== reviewArr.user.length-1){
        reviewList.innerHTML += "<hr>"
    }
}

const reviewTotalStar = document.querySelector("#total_star");
const reviewTotalNum = document.querySelector("#total_numOfReview");
reviewTotalStar.textContent = reviewArr.total.star;
reviewTotalNum.textContent = reviewArr.total.num;

document.addEventListener("DOMContentLoaded", () => {
    const menuWrap_xButton = document.querySelector("#menubar_x");
    const menu_button = document.querySelector("#nav_menuBtn");
    const menuWrap = document.querySelector("#menuWrap");
    const overlay = document.querySelector("#menubar_overlay");
    const product_menu = document.querySelector("#product_menu");

    menu_button.addEventListener("click", (event) => {
        menuWrap.classList.toggle("on"); //menuWrap에 "on"이라는 클래스가 없으면 추가함. 있으면 없애고. ex) <span id="menuWrap" class="on">
        overlay.classList.toggle("on");
        product_menu.classList.toggle("on");
        console.log("click button");
    })
    menuWrap_xButton.addEventListener("click", (event) => {
        menuWrap.classList.toggle("on");
        overlay.classList.toggle("on");
        product_menu.classList.toggle("on");
        console.log("click button2");
    })
    overlay.addEventListener("click", (event) => {
        if(event.target.contains(menuWrap)){
            console.log("click button3");
            // console.log(event.target);
            menuWrap.classList.remove("on");
            overlay.classList.remove("on");
            product_menu.classList.remove("on");
        }
    })
})