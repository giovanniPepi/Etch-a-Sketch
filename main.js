const body = document.querySelector("body");
   
createBaseHtml();
createContainer();

const defaultColor = "black";
let gridColor = defaultColor; 


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
    lateralDiv.prepend(switchWhiteBtn);

    const switchBlackBtn = document.createElement("button");
    switchBlackBtn.setAttribute("class", "switchBlackBtn");
    lateralDiv.appendChild(switchBlackBtn);

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

    styleGrid();
};

function styleGrid () {
    const lateralDiv = document.querySelector(".lateral")
    lateralDiv.style.display = 'flex';
    lateralDiv.style.flexDirection = "column";

    const gridContainer = document.querySelector('.container');
    gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;

}

function paintGrid (e) {
    e.target.style.backgroundColor = `${gridColor}`
}

function switchColors (color) {
    gridColor = `${color}`    
};


