const inputGridSize = document.querySelector("#gridSize");
const btnGridInput = document.querySelector("#btnG");
const divContainerGrid = document.querySelector(".etchASketchContainer");
const canvasSide = divContainerGrid.offsetWidth;
let gridSize = 0;
let tileWidth = 0;
let opacity = 0; // delete if we don't want the opacity featuer

btnGridInput.addEventListener("click",()=>
{
    gridSize = getScreenSize();
    tileWidth = (canvasSide-(16*2+2*2))/gridSize; //16 margin size, 1px padding
    divContainerGrid.innerHTML=''; // clears the etch a sketch grid

    for (let i=1;i<=gridSize*gridSize;i++){
        createCanvas(gridSize,tileWidth,i);
        }
})


function getScreenSize(){
    let squares = +prompt("How big you want the grid to be (a x a)");
    if (typeof (squares) == "string" || !Number.isInteger(squares) || squares > 100 || squares <1){
        squares = 50;
        alert(`Positive integer under 100 expected, default grid of ${squares} x ${squares} created`);
        }
    return +squares;
}

function createCanvas(gridSizeInput,tiles,counter){
    divEtchASketch = document.createElement("div");
    divEtchASketch.setAttribute("style",`width:${tiles}px; height:${tiles}px; background: #808080;`);
    // divEtchASketch.setAttribute("class","etchASketchPixel"+counter+" square");
    divEtchASketch.style.opacity = 0; // delete if we dont' want the opacity feature
    divContainerGrid.appendChild(divEtchASketch);      
    
    divEtchASketch.addEventListener("mouseover",(e)=> {
        const divNewColor = e.target;
        // const divNewColor = document.querySelector(`.etchASketchPixel${i}`)
        let rColor = 255*(Math.random())+1;
        let gColor = 255*(Math.random())+1;
        let bColor = 255*(Math.random())+1;
        divNewColor.style.background = `rgb(${rColor},${gColor},${bColor} )`;
    },{once:true})
    
    divEtchASketch.addEventListener("mouseover",(e)=>{
        const divNewColor = e.target;
        opacity = +divNewColor.style.opacity;
        if(opacity <1){divNewColor.style.opacity = opacity +0.1} 
    })
}