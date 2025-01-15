"use strict";

//Add reference to the existing container
const container = document.querySelector(".container");

//Create button to change grid size
const btn = document.querySelector("button");

//Funtion to create grid
function createGrid(gridSize) {
    
    //clear existing container
    container.innerHTML = "";

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const newDiv = document.createElement("div");
        newDiv.id = `div-${i+1}`;
        newDiv.className = `grid-Divs`;
        newDiv.style.flex = `1 0 calc(100% / ${gridSize})`;
        container.appendChild(newDiv);
    }

    const gridDivs = document.querySelectorAll(".grid-Divs");

    gridDivs.forEach((div) => {
        div.style.opacity = "0"; // Start fully transparent (or no darkening)
    
        div.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(div.style.opacity); // Get current opacity or default to 0
            currentOpacity = currentOpacity + 0.1; // Increment by 0.1 but cap at 1
            div.style.opacity = currentOpacity; // Update opacity
        });

        //Add hover effect to the container
        container.addEventListener("mouseover", (event) => {
            if (event.target.classList.contains("grid-Divs")) {
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
        });
    });
}


//Prompt user to input desired size of each side of the grid from 1-100
btn.addEventListener("click", () => {
    let newGridSize = parseInt(prompt("How many squares per side?"));

    if (newGridSize > 0 && newGridSize <= 100) {
        createGrid(newGridSize);
    }
    else {
        alert("Invalid! Enter a Value from 1 to 100");
    }
});

//Initialize default grid
createGrid(16);
