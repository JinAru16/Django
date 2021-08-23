"use strict"

//주어진 이미지 크기 창 크기에 맞게 초기화.
function initTempImg(imgTemp){
    imgTemp.style.width = window.innerWidth-17 + "px";
    imgTemp.style.height = window.innerWidth/2.5 + "px";
}

//이미지 크기 초기화.
function initBenuImg (){
    //오버레이
    slideOverlay.style.width = (window.innerWidth-17) + "px";
    slideOverlay.style.height = window.innerWidth/2.5 + "px";
    //각 이미지.
    slideImgs.forEach((img) => {
        initTempImg(img)
    })
}

//베너 양옆 이미지 추가하기 위한 함수.
function addBenuImg(ind, location) {
    let imgTemp = document.createElement("img");

    imgTemp.src = slideImgs[ind].src; //복사할 이미지 다름
    initTempImg(imgTemp);

    const tempLoca = document.querySelector(location); //복사될 위치 다름.
    tempLoca.appendChild(imgTemp);
}

//이미지 슬라이드.
function showSlides(slideInd){
    let [reverseFront, reverseBack] = [false, false];
    
    if(slideInd > slideImgs.length){
        slideInd = 1;
        reverseFront = true;
    }
    else if(slideInd < 1){
        slideInd = slideImgs.length;
        reverseBack = true;
    }
    console.log(slideInd, typeof(slideInd));

    dots.forEach((dot) => {
        dot.className = dot.className.replace(" active", "");
    })

    if(reverseFront){
        console.log("reverse");
        slider.style.left = -((window.innerWidth-17) * (slideImgs.length+1)) + "px";
        setTimeout(()=>{
            // slider.style.transition = "left ease 0s";
            slider.style.left = -(window.innerWidth-17) + "px";
        }, 1000 * 0.3);
    }
    else if(reverseBack){
        console.log("reverse back");
        slider.style.left = "0px";
        setTimeout(()=>{
            // slider.style.transition = "left ease 0s";
            slider.style.left = -(window.innerWidth-17) * (slideInd) + "px";
        }, 1000 * 0.3);
    }
    else{
        slider.style.left = -((window.innerWidth-17) * (slideInd)) + "px";
    }

    dots[slideInd-1].className += " active";
    slideIndex = slideInd;
}


const slideOverlay = document.querySelector("#mainbenu__overlay");
const slider = document.querySelector(".mainbenu__imgList");
const slideImgs = document.querySelectorAll(".mainbenu__img");
const dots = document.querySelectorAll(".mainbenu__dot");
let slideIndex = 1;

initBenuImg();
addBenuImg(slideImgs.length-1, "#tempBack");
addBenuImg(0, "#tempFront");

showSlides(slideIndex);

window.addEventListener("resize", () => {
    initBenuImg();
    let imgTemp = document.querySelector("#tempBack img");
    initTempImg(imgTemp);
    imgTemp = document.querySelector("#tempFront img");
    initTempImg(imgTemp);

    showSlides(slideIndex);
})

//점 눌렀을 때 이미지 슬라이드.
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        showSlides(Number(dot.id));
    })
})

//화살표 눌렀을 때 이미지 슬라이드.
function nextSlide(n){
    slideIndex += Number(n);
    // console.log(slide);
    showSlides(slideIndex);
}



document.addEventListener("DOMContentLoaded", () => {
    // 메뉴바 클릭했을 때의 동작
    const menuWrap_xButton = document.querySelector("#menubar_x");
    const menu_button = document.querySelector("#nav_menuBtn");
    const menuWrap = document.querySelector("#menuWrap");
    const overlay = document.querySelector("#menubar_overlay");

    menu_button.addEventListener("click", (event) => {
        menuWrap.classList.toggle("on"); //menuWrap에 "on"이라는 클래스가 없으면 추가함. 있으면 없애고. ex) <span id="menuWrap" class="on">
        overlay.classList.toggle("on");
        console.log("click button");
    })
    menuWrap_xButton.addEventListener("click", (event) => {
        menuWrap.classList.toggle("on");
        overlay.classList.toggle("on");
        console.log("click button2");
    })
    overlay.addEventListener("click", (event) => {
        if(event.target.contains(menuWrap)){ //클릭한 곳 밑에 메뉴바가 있다면, 그 오버레이를 클릭한 게 됨. 메뉴바 말고.
            console.log("click button3");
            // console.log(event.target);
            menuWrap.classList.remove("on");
            overlay.classList.remove("on");
        }
    })

})