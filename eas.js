"use strict";

const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = `div-${i+1}`;
    newDiv.className = `grid-Divs`;
    container.appendChild(newDiv);
}

const gridDivs = document.querySelectorAll("grid-Divs");