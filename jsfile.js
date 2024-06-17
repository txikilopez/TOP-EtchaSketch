

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
    if (gridSize>10 || gridSize < 2){
        gridSize = 4;
    }

    tileWidth = (canvasSide-16)/gridSize;
    for (let i=1;i<=gridSize*gridSize;i++){
        divEtchASketch = document.createElement("div");
        // divEtchASketch.setAttribute("class","etchASketch");
        divEtchASketch.setAttribute("style",`width:${tileWidth}px; height:${tileWidth}px; background: #f4f4f4;`);
        divContainerGrid.appendChild(divEtchASketch);

        divEtchASketch.addEventListener("click",(e)=> {
            console.log(divEtchASketch);
            console.log(e.target);
            const divNewColor = e.target;
            divNewColor.setAttribute("style",`width:${tileWidth}px; height:${tileWidth}px; background: #46444C;`);
            // e.target.setAttribute("style",`width:${tileWidth}px; height:${tileWidth}px; background: #46444C;`);
            })
        }
})

