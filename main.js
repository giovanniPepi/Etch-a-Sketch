const body = document.querySelector("body");
   
createBaseHtml();
createContainer();

const defaultMode = 'color'
let colorGridMode = defaultMode;


function createBaseHtml () {
    const headerDiv  = document.createElement("div");
    headerDiv.setAttribute("class", "header");
    headerDiv.textContent = "I'm the header!";
    body.prepend(headerDiv);

    const mainDiv  = document.createElement("div");
    mainDiv.setAttribute("class", "main");
    body.appendChild(mainDiv);

    const footerDiv  = document.createElement("div");
    footerDiv.setAttribute("class", "footer");
    footerDiv.textContent = "I'm the footerDiv!";
    body.appendChild(footerDiv);
}

function createContainer () {
    const mainDiv = document.querySelector(".main");
    
    const lateralDiv = document.createElement("div");
    lateralDiv.setAttribute("class", "lateral");
    
    const switchWhiteBtn = document.createElement("button");
    switchWhiteBtn.setAttribute("class", "switchWhiteBtn");
    switchWhiteBtn.textContent = "Erase mode!";
    lateralDiv.prepend(switchWhiteBtn);

    const switchBlackBtn = document.createElement("button");
    switchBlackBtn.setAttribute("class", "switchBlackBtn");
    switchBlackBtn.textContent = "Switch to Black!";
    lateralDiv.appendChild(switchBlackBtn);

    const switchRandBtn = document.createElement("button");
    switchRandBtn.setAttribute("class", "randBtn");
    switchRandBtn.textContent = "RANDOM COLORS!";
    lateralDiv.appendChild(switchRandBtn);

    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "container");

    mainDiv.prepend(lateralDiv);
    mainDiv.appendChild(containerDiv); 

    createGrid(containerDiv);   
};

function createGrid (containerDiv) {
    const numberClone = 256;  

    for (let i = 0; i < numberClone; i++) {
        let cloneDiv = document.createElement("div");
        cloneDiv.setAttribute("class", "cloneDiv");
        cloneDiv.addEventListener("mouseover", paintGrid);
        containerDiv.appendChild(cloneDiv);  
    }
    addCSS();
};

function addCSS () {
    const lateralDiv = document.querySelector(".lateral")
    lateralDiv.style.display = 'flex';
    lateralDiv.style.flexDirection = "column";
    lateralDiv.style.gap = "2rem";

    const gridContainer = document.querySelector('.container');
    gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;

    const switchWhiteBtn = document.querySelector(".switchWhiteBtn");
    switchWhiteBtn.addEventListener("click", () => colorGridMode = 'erase');

    const switchBlackBtn = document.querySelector(".switchBlackBtn");
    switchBlackBtn.addEventListener("click", () => colorGridMode = 'color');
 
    const switchRandBtn = document.querySelector(".randBtn");
    switchRandBtn.addEventListener("click", () => colorGridMode = 'random');
};

function paintGrid (e) {
    console.log(colorGridMode);
    if (colorGridMode == 'random') {
        let randR = Math.floor(Math.random() * 256);
        let randG = Math.floor(Math.random() * 256);
        let randB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`
        
    } else if (colorGridMode == 'color') {
        e.target.style.backgroundColor = 'black';
    } else if (colorGridMode == 'erase') {
        e.target.style.backgroundColor = 'white';
    }



};


