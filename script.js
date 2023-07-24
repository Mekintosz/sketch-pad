function createDiv() {
    const cell = document.createElement("div");
    cell.className = "cells";

    return cell;
};

function addDivs() {
    const pad = document.querySelector("#container");
      myDivs = [],
      i = 0,
      numOfDivs = 256;

    for (i; i < numOfDivs; i += 1) {
      myDivs.push(createDiv());
      pad.appendChild(myDivs[i]);
    }

    // myDivs[5].className = "modified-div";
    // myDivs[5].innerText = "I'm modified DIV";
  }

addDivs();
