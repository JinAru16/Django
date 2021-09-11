
const data = {
    showNum: 8,
    clothNum: 16,
    cloth:[
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes3.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes1.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes2.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes4.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes2.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes3.jpg"
        },
        {
            name: "썸머 쿨 아리랑",
            price: "15,000",
            img: "/static/Top/img/clothes1.jpg"
        },
    ]
}

const clothBundle = document.querySelector("#closet-dataArea");

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

const showMore_Btn = document.querySelector(".showMore__btn");
showMore_Btn.addEventListener("click", () => {
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
})