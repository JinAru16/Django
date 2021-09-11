"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const menuWrap_xButton = document.querySelector("#navbar_x");
    const menu_button = document.querySelector("#nav_menubar");
    const menuWrap = document.querySelector("#menuWrap");

    menu_button.addEventListener("click", (event) => {
        menuWrap.classList.toggle("on"); //menuWrap에 "on"이라는 클래스가 없으면 추가함. 있으면 없애고. ex) <span id="menuWrap" class="on">
        console.log("click button");
    })
    menuWrap_xButton.addEventListener("click", (event) => {
        menuWrap.classList.toggle("on");
        console.log("click button2");
    })
})