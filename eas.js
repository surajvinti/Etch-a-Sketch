"use strict";

//Add reference to the document body
const bod = document.querySelector("body");

//Add reference to the existing container
const container = document.querySelector(".container");

//Declare default grid size (16)
let gridSize = 16;

//Add appropriate amount of squares divs to create the 16x16 grid
for (let i = 0; i < (gridSize * gridSize); i++) {
    const newDiv = document.createElement("div");
    newDiv.id = `div-${i+1}`;
    newDiv.className = `grid-Divs`;
    container.appendChild(newDiv);
}

//Add reference to the square divs
const gridDivs = document.querySelectorAll(".grid-Divs");

//Add hover effect to the square divs
gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
        gridDiv.style.backgroundColor = "black";
    });
});

//Create button to change grid size
const btn = document.querySelector("button");

btn.addEventListener("click", changeGridSize);

//Function to change and update the grid size
function changeGridSize() {
    
    //Prompt user to input desired size of each side of the grid from 1-100
    let newGridSize = parseInt(prompt("How many squares per side?"));

    if (newGridSize > 0 && newGridSize <= 100) {

        //Remove the old grid squares and container
        gridDivs.forEach(gridDiv => gridDiv.remove());
        container.remove();
        
        //Remove the divs when pressing the button more than once
        const gridComponents = document.querySelectorAll(".gridComponent");
        gridComponents.forEach((component) => component.remove());


        //Create new grid container with class newContainer
        const newContainer = document.createElement("div");
        newContainer.classList.add("newContainer", "gridComponent");
        document.body.appendChild(newContainer);
        
        //Add desired amount of new square divs to the new container
        for (let i = 0; i < (newGridSize * newGridSize); i++) {
            const newDiv = document.createElement("div");
            newDiv.id = `div-${i+1}`;
            newDiv.classList.add("new-Grid-Divs", "gridComponent");
            newDiv.style.flex = `1 0 calc(100% / ${newGridSize})`;
            newContainer.appendChild(newDiv);
        }

        //Add reference to the new square divs
        const newGridDivs = document.querySelectorAll(".new-Grid-Divs");

        //Add the darkening on hover effect
        newGridDivs.forEach((newGridDiv) => {
            newGridDiv.addEventListener("mouseover", () => {
                newGridDiv.style.backgroundColor = "black";
            });
        });
    }
    else {
        alert("Invalid! Enter a Value from 1 to 100");
    }
}