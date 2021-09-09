const data = {
    clothNum: 8,
    cloth:[
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "../img/clothes1.jpg"
        },
    ]
}

const clothArr = document.querySelectorAll(".closet");
const clothBundle = clothArr[1];


data.cloth.forEach((cloth) => {
    const temp = document.createElement("div");
    temp.className = "clothes";
    temp.innerHTML = `
        <a><img class = "clothesImg" src="${cloth.img}" alt="${cloth.name}"></a>
        <p><a>${cloth.name}</a></p>
        <p>${cloth.price}</p>
    `;
    clothBundle.appendChild(temp);
})