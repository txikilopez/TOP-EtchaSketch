
const inputGridSize = document.querySelector("#gridSize");
const btnGridInput = document.querySelector("#btnG");
const divContainerGrid = document.querySelector(".etchASketchContainer");
const canvasSide = divContainerGrid.offsetWidth;
// delete default of 4 after getting the hover correct
let gridSize = 0;
let tileWidth = 0;

btnGridInput.addEventListener("click",(e)=>
{
    gridSize = getScreenSize();
    console.log(gridSize);
    
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
//untested
function getScreenSize(){
    let squares = +prompt("How big you want the grid to be (a x a)");
    if (typeof (squares) == "string" || !Number.isInteger(squares) || squares > 100 || squares <1){
        alert("Positive integer under 100 expected, default grid of 16 squares created");
        squares = 16;}
    return +squares;
}
