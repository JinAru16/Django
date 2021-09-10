"use strict"

//주어진 이미지 크기를 창 크기에 맞게 초기화.
function initTempImg(imgTemp){
    imgTemp.style.width = window.innerWidth-17 + "px";
    imgTemp.style.height = window.innerWidth/2.5 + "px";
}

//베너 이미지 크기 초기화.
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
    initTempImg(imgTemp); //이미지 크기 초기화.

    const tempLoca = document.querySelector(location); //복사될 위치 다름.
    tempLoca.appendChild(imgTemp); //해당 위치에 이미지 추가.
}

//이미지 슬라이드.
//3개 슬라이드가 있다고 가정하면,
//복사된 마지막 이미지(3) -> 1 -> 2 -> 3 -> 복사된 첫번째 이미지(1)
//이런식임.
function showSlides(){
    let [reverseFront, reverseBack] = [false, false]; //역전 슬라이드를 위한 변수.
    slider.style.transition = "left ease-in-out 0.4s";
    
    if(slideIndex > slideImgs.length){ //마지막 이미지 -> 첫번째 이미지 이동
        slideIndex = 1;
        reverseFront = true;
    }
    else if(slideIndex < 1){ //첫번째 -> 마지막 이동.
        slideIndex = slideImgs.length;
        reverseBack = true;
    }
    // console.log(slideInd, typeof(slideInd));

    //모든 점들에 대해 클래스이름에 active 있으면 없애기.
    dots.forEach((dot) => {
        dot.className = dot.className.replace(" active", ""); 
    })

    if(reverseFront){ //마지막 -> 첫번째 이미지.
        // console.log("reverse");
        slider.style.left = -((window.innerWidth-17) * (slideImgs.length+1)) + "px"; //마지막 이미지 바로 다음에있는 복사된 첫번째 이미지로 이동.
        //0.3초 후 첫번째 이미지가 있는곳으로 이동.
        setTimeout(()=>{ 
            slider.style.transition = "left ease-in-out 0s";
            slider.style.left = -(window.innerWidth-17) + "px";
        }, 1000 * 0.3);
    }
    else if(reverseBack){ //첫번째 -> 마지막 이미지 이동.
        // console.log("reverse back");
        slider.style.left = "0px"; //복사본 마지막 이미지 있는데로 이동.
        //0.3초 후 원래 마지막 이미지가 있던 곳으로 이동.
        setTimeout(()=>{
            slider.style.transition = "left ease-in-out 0s";
            slider.style.left = -(window.innerWidth-17) * (slideIndex) + "px";
        }, 1000 * 0.3);
    }
    else{ //해당 슬라이드의 번호*너비만큼 밀어버림.
        slider.style.left = -((window.innerWidth-17) * (slideIndex)) + "px";
    }

    dots[slideIndex-1].className += " active"; //해당 슬라이드의 점의 클래스이름에 active 추가. 
    //띄어쓰기를 하는 이유는, 그래야지 클래스가 2개인것처럼(약간 분리된 것처럼) 동작해서 그럼.
}




const slideOverlay = document.querySelector("#mainbenu__overlay");
const slider = document.querySelector(".mainbenu__imgList");
const slideImgs = document.querySelectorAll(".mainbenu__img");
const dots = document.querySelectorAll(".mainbenu__dot");
let slideIndex = 1;

//창의 크기가 바뀔때마다, 베너 이미지 크기 초기화함.
window.addEventListener("resize", () => {
    initBenuImg();
    let imgTemp = document.querySelector("#tempBack img");
    initTempImg(imgTemp);
    imgTemp = document.querySelector("#tempFront img");
    initTempImg(imgTemp);

    slider.style.transition = "left ease-in-out 0s";
    slider.style.left = -((window.innerWidth-17) * (slideIndex)) + "px";
})

//점 눌렀을 때 이미지 슬라이드.
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        slideIndex = Number(dot.id)
        showSlides();
    })
})
//화살표 눌렀을 때 이미지 슬라이드.
function nextSlide(n){
    slideIndex += Number(n);
    showSlides();
    // console.log(slide);
}

//자동 슬라이드
let timeID;
function timeSlide(){
    timeID = setInterval(() => {
        if(slideIndex > slideImgs.length + 1){ //마지막 이미지 -> 첫번째 이미지 이동
            slideIndex = 1;
        }
        nextSlide(1);
        console.log(slideIndex);
    }, 1000 * 5);
}
slideOverlay.addEventListener("mouseenter", (e) => {
    console.log("tocut");
    clearInterval(timeID);
})
slideOverlay.addEventListener("mouseleave", (e) =>{
    console.log("out");
    timeSlide();
})

initBenuImg();
addBenuImg(slideImgs.length-1, "#tempBack");
addBenuImg(0, "#tempFront");

showSlides();
timeSlide();