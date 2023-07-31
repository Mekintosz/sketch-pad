// function createDiv() {
//     const cell = document.createElement("div");
//     cell.className = "cells";

//     return cell;
// };

function addDivs() {
    const pad = document.querySelector("#container");
    
      
      let numOfDivs = 81;
    for (let i=0; i < numOfDivs; i += 1) {
      const padDiv = document.createElement("div")
      pad.appendChild(padDiv);
      padDiv.classList.add("cells");
      padDiv.addEventListener("mouseenter", (e) =>  padDiv.classList.add("colored"));
    }
    

    // myDivs[5].className = "modified-div";
    // myDivs[5].innerText = "I'm modified DIV";
  }

function newGrid() {
  const pad = document.querySelector("#container");
  const container = document.querySelector('#container');
  removeAllDivs(container)

      let numOfDivs = prompt("Choose number of pixels per side up to 100") ** 2;
   
    for (let i=0; i < numOfDivs; i += 1) {
      const padDiv = document.createElement("div")
      padDiv.setAttribute("style", `width: ${900 / Math.sqrt(numOfDivs)}px`);
      padDiv.classList.add("cells");
      pad.appendChild(padDiv);
      padDiv.addEventListener("mouseenter", (e) =>  padDiv.classList.add("colored"));
    }
}

function removeAllDivs(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function giveRandomColor() {
const padDiv = document.querySelectorAll(".cells")



  // Generates a random value between 0 and 255
  function randomNum() {
    return Math.floor(Math.random() * 256);
  }

  // Returns an array of 3 values for rgb
  function randomRGB() {
    var red = randomNum();
    var green = randomNum();
    var blue = randomNum();
    return [red,green,blue];
  }

  // Store an array of values for rgb
  var rgbVals = randomRGB();

  // Turn array into an rgb value
  var tempColor = "rgb(" + rgbVals[0] + ", " + rgbVals[1] + ", " + rgbVals[2] + ")";

  // Give rgb color to the background
  padDiv.addEventListener("mouseenter", (e) => this.style.add("color",tempColor));
}

addDivs();
