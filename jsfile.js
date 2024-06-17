

const inputGridSize = document.querySelector("#gridSize");
const btnGridInput = document.querySelector("#btnG");
const divContainerGrid = document.querySelector(".etchASketchContainer");

const canvasSide = divContainerGrid.offsetWidth;
// delete default of 4 after getting the hover correct
let gridSize = 0;
let tileWidth = 0;

btnGridInput.addEventListener("click",(e)=>
{
    //limits gridsize to be between 10 and 1;
    //captures value fron input
    gridSize = inputGridSize.value;
    if (gridSize>100 || gridSize < 8){
        gridSize = 16;
    }

    tileWidth = (canvasSide-(16*2+2*2))/gridSize;
    for (let i=1;i<=gridSize*gridSize;i++){
        divEtchASketch = document.createElement("div");
        // divEtchASketch.setAttribute("class","etchASketch");
        divEtchASketch.setAttribute("style",`width:${tileWidth}px; height:${tileWidth}px; background: #808080;`);
        divContainerGrid.appendChild(divEtchASketch);

        divEtchASketch.addEventListener("mouseover",(e)=> {
            const divNewColor = e.target;
            divNewColor.style.background = "#5A5A5A";
            // divEtchASketch.style.background = "#46444C"; doesn't work
            })
        }
})

