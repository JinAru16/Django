"use strict"

document.addEventListener("DOMContentLoaded", () => {
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
        if(event.target.contains(menuWrap)){
            console.log("click button3");
            // console.log(event.target);
            menuWrap.classList.remove("on");
            overlay.classList.remove("on");
        }
    })
})