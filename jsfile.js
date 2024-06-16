

const inputGridSize = document.querySelector("#gridSize");
const btnGridInput = document.querySelector("#btnG");

const divContainerGrid = document.querySelector(".etchASketchContainer");


const canvasSide = divContainerGrid.offsetWidth;
let gridSize = 4;
let tileWidth = Math.floor((canvasSide-16)/gridSize);
console.log(canvasSide);
console.log(tileWidth);

btnGridInput.addEventListener("click",(e)=>
{
    for (let i=1;i<=gridSize*gridSize;i++){
        divEtchASketch = document.createElement("div");
        divEtchASketch.setAttribute("class","etchASketch");
        divEtchASketch.setAttribute("style",`width:${tileWidth}px; height:${tileWidth}px; background: coral;`);
        divContainerGrid.appendChild(divEtchASketch);
        }
})

