"use strict"

const clothsData = {
    "weeklyBest": [
        {
            "rank":1,
            "name": "썸머 쿨 아리랑",
            "price": "15,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes1.jpg"
        },
        {
            "rank":2,
            "name": "베이직 니트",
            "price": "24,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes2.jpg"
        },
        {
            "rank":3,
            "name": "체크 카디건",
            "price": "35,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes3.jpg"
        },
        {
            "rank":4,
            "name": "포근한 카디건",
            "price": "28,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes4.jpg"
        }
    ],

    "monthlyBest": [
        {
            "rank":1,
            "name": "썸머 쿨 아리랑",
            "price": "15,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes3.jpg"
        },
        {
            "rank":2,
            "name": "베이직 니트",
            "price": "24,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes4.jpg"
        },
        {
            "rank":3,
            "name": "체크 카디건",
            "price": "35,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes2.jpg"
        },
        {
            "rank":4,
            "name": "포근한 카디건",
            "price": "28,000",
            "pagelink": "../product/product-detail.html",
            "img": "static/Top/img/clothes1.jpg"
        }
    ]
}

const weekly = document.querySelector("#bestProduct__weekly");
const weeklyBestData = clothsData.weeklyBest;
for(let i=0; i<weeklyBestData.length; i++){
    let unit = document.createElement("div");
    unit.className = "bestProduct__cloth";
    unit.innerHTML = `
        <a href="${weeklyBestData[i].pagelink}">
            <img class = "clothesImg" src="${weeklyBestData[i].img}" alt="${weeklyBestData[i].name}" title="${weeklyBestData[i].name}">
            <div>${weeklyBestData[i].name}</div>
            <div>${weeklyBestData[i].price}</div>
        </a>
    `;
    weekly.appendChild(unit);
}

const monthly = document.querySelector("#bestProduct__monthly");
const monthlyBestData = clothsData.monthlyBest;

for(let i=0; i<monthlyBestData.length; i++){
    let unit = document.createElement("div");
    unit.className = "bestProduct__cloth";
    unit.innerHTML = `
        <a href="${monthlyBestData[i].pagelink}">
            <img class = "clothesImg" src="${monthlyBestData[i].img}" alt="${monthlyBestData[i].name}" title="${monthlyBestData[i].name}">
            <div>${monthlyBestData[i].name}</div>
            <div>${monthlyBestData[i].price}</div>
        </a>
    `;
    monthly.appendChild(unit);
}