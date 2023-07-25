// function createDiv() {
//     const cell = document.createElement("div");
//     cell.className = "cells";

//     return cell;
// };

function addDivs() {
    const pad = document.querySelector("#container");
    
      i = 0,
      numOfDivs = 81;
    for (i; i < numOfDivs; i += 1) {
      const padDiv = document.createElement("div")
      pad.appendChild(padDiv);
      padDiv.classList.add("cells");
      padDiv.addEventListener("mouseenter", (e) =>  padDiv.setAttribute("style", "background: black;"));
    }
    

    // myDivs[5].className = "modified-div";
    // myDivs[5].innerText = "I'm modified DIV";
  }

function newGrid() {
  const pad = document.querySelector("#container");
  const  padDiv = document.querySelectorAll(".cells");
  const container = document.querySelector('#container');
  removeAllDivs(container)

      i = 0,
      numOfDivs = prompt("Choos number of pixels up to 100");
    for (i; i < numOfDivs; i += 1) {
      const padDiv = document.createElement("div")
      padDiv.setAttribute("style", `width: ${900/Math.sqrt(numOfDivs)}px`);
      padDiv.classList.add("cells");
      pad.appendChild(padDiv);
      padDiv.addEventListener("mouseenter", (e) => padDiv.classList.add("colored") );
    }
}

function removeAllDivs(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


addDivs();

