const body = document.querySelector("body");
const defaultMode = 'color'
const defaultSize = 256;


let numberClone = defaultSize; // used in createGrid
let colorGridMode = defaultMode;
   
createHtml();
addCSS();
getEventListeners();

function createHtml () {
    const headerDiv  = document.createElement("div");
    headerDiv.setAttribute("class", "headerDiv");
    body.prepend(headerDiv);

    const mainDiv  = document.createElement("div");
    mainDiv.setAttribute("class", "mainDiv");
    body.appendChild(mainDiv);

    const footerDiv  = document.createElement("div");
    footerDiv.setAttribute("class", "footerDiv");
    body.appendChild(footerDiv);
  
    const lateralDiv = document.createElement("div");
    lateralDiv.setAttribute("class", "lateral");
    
    const switchWhiteBtn = document.createElement("button");
    switchWhiteBtn.setAttribute("class", "switchWhiteBtn");
    switchWhiteBtn.textContent = "Eraser";
    lateralDiv.appendChild(switchWhiteBtn);

    const switchBlackBtn = document.createElement("button");
    switchBlackBtn.setAttribute("class", "switchBlackBtn");
    switchBlackBtn.textContent = "Dark Pen";
    lateralDiv.appendChild(switchBlackBtn);

    const switchPencilBtn = document.createElement("button");
    switchPencilBtn.setAttribute("class", "switchPencilBtn");
    switchPencilBtn.textContent = "Pencil";
    lateralDiv.appendChild(switchPencilBtn)

    const switchRandBtn = document.createElement("button");
    switchRandBtn.setAttribute("class", "randBtn");
    switchRandBtn.textContent = "Random Color";
    lateralDiv.appendChild(switchRandBtn);

    const eraseBtn = document.createElement("button");
    eraseBtn.setAttribute("class", "eraseBtn");
    eraseBtn.textContent = "Erase";
    lateralDiv.appendChild(eraseBtn);

    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "containerDiv");

    const sizeDiv = document.createElement("div");
    sizeDiv.setAttribute("class", "sizeDiv");
   
    const sizeInpt = document.createElement("input");
    sizeInpt.setAttribute("class", "sizeInpt");

    const sizeP = document.createElement("p");
    sizeP.setAttribute("class", "sizeP");
    
    sizeDiv.appendChild(sizeP);
    sizeDiv.prepend(sizeInpt);
    lateralDiv.appendChild(sizeDiv);
    mainDiv.appendChild(lateralDiv);    
    mainDiv.prepend(containerDiv);     
    createGrid(numberClone);       
};

function createGrid (numberClone) {
    const containerDiv = document.querySelector(".containerDiv");
    console.log(numberClone);
    for (let i = 0; i < numberClone; i++) {
        let cloneDiv = document.createElement("div");
        cloneDiv.setAttribute("class", "cloneDiv");
        /* calls painting function for every mouse move */
        cloneDiv.addEventListener("mouseover", paintGrid);       
        containerDiv.appendChild(cloneDiv);  
    };    
};

function refreshClones () {
    const cloneDiv = document.querySelectorAll(".cloneDiv")
    cloneDiv.forEach(clone => clone.style.backgroundColor = 'white');
}

function addCSS () {
    const body = document.querySelector("body");
    body.style.background = "rgb(224, 227, 230)";
    body.style.height = '100vh';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.margin = 0;
    body.style.textAlign = 'center';
    body.style.fontFamily = 'Arial';
    body.style.color = 'rgb(65, 65, 65';

    const lateralDiv = document.querySelector(".lateral")
    lateralDiv.style.display = 'flex';
    lateralDiv.style.gap = "1rem";

    const mainDiv = document.querySelector(".mainDiv");
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";
    mainDiv.style.background = "rgb(224, 227, 230)"; 
    mainDiv.style.flex = 1;
    mainDiv.style.gap = '1rem';
    mainDiv.style.justifyContent = 'flex-start';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.margin = "0 auto";
    mainDiv.style.maxWidth = '55rem';
    mainDiv.style.height = "auto"
    mainDiv.style.padding = '1rem';
    
    const containerDiv = document.querySelector('.containerDiv');
    containerDiv.style.display = 'grid';
    containerDiv.style.gridTemplateColumns = `repeat(16, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(16, 1fr)`; 
    containerDiv.style.height = '40rem';
    containerDiv.style.width = '40rem';
    
    const headerDiv = document.querySelector(".headerDiv")
    const headerDivP = document.createElement("p");
    headerDivP.textContent = "Etch-a-Sketch";
    headerDiv.appendChild(headerDivP);

    headerDiv.style.backgroundColor = "background:rgb(173, 181, 197)";
    headerDiv.style.height = "5rem";
    headerDiv.style.display = "flex";
    headerDiv.style.padding = "1.5rem";
    headerDiv.style.alignText = "center";
    headerDiv.style.alignItems = "center";
    headerDiv.style.justifyContent = "center";
    headerDiv.style.fontSize = "6rem";
    headerDiv.style.fontWeight = 550;
 
    const footerDiv = document.querySelector(".footerDiv")
    const footerDivP = document.createElement("p");
    footerDiv.textContent = "Copyright @gerijeb"
    footerDiv.appendChild(footerDivP);

    footerDiv.style.backgroundColor = "rgb(94, 119, 138)";
    footerDiv.style.height = "1rem";
    footerDiv.style.fontSize = '1.25rem';
    footerDiv.style.display = "flex";
    footerDiv.style.padding = "1rem";
    footerDiv.style.alignText = "center";
    footerDiv.style.alignItems = "center";
    footerDiv.style.justifyContent = "center";

    const sizeDiv = document.querySelector(".sizeDiv");


    const sizeInpt = document.querySelector(".sizeInpt");
    sizeInpt.setAttribute("type", "range");
    sizeInpt.setAttribute("min", "10");
    sizeInpt.setAttribute("max", "64");

    const sizeP = document.querySelector(".sizeP");
    sizeP.textContent = `Grid size: ${sizeInpt.value} * ${sizeInpt.value}`;    

    const cloneDiv = document.querySelectorAll(".cloneDiv");
    cloneDiv.forEach (clone => clone.style.backgroundColor = 'white'); 

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.style.background = 'background:rgb(173, 181, 197)');
    buttons.forEach(button => button.style.fontSize ='1rem');
    buttons.forEach(button => button.style.border = '.1rem solid rgb(65, 65, 65)');
    buttons.forEach(button => button.style.borderRadius = '.5rem');
    buttons.forEach(button => button.style.color = "rgb(65, 65, 65)");
    buttons.forEach(button => button.style.padding = '.5rem');



};

function getEventListeners() {
    const switchWhiteBtn = document.querySelector(".switchWhiteBtn");
    switchWhiteBtn.addEventListener("click", () => colorGridMode = 'erase');

    const switchBlackBtn = document.querySelector(".switchBlackBtn");
    switchBlackBtn.addEventListener("click", () => {
        colorGridMode = 'color';
        refreshClones();
    });
    
    const switchRandBtn = document.querySelector(".randBtn");
    switchRandBtn.addEventListener("click", () => { 
        colorGridMode = 'random';
        refreshClones();
    });

    const switchPencilBtn = document.querySelector(".switchPencilBtn");
    switchPencilBtn.addEventListener("click", () => {
        colorGridMode = "pencil";
        refreshClones();
    });

    const eraseBtn = document.querySelector(".eraseBtn");
    eraseBtn.addEventListener("click", () => refreshClones());

    const sizeInpt = document.querySelector(".sizeInpt");
    sizeInpt.onchange = (e) => updateGrid(e.target.value);
    sizeInpt.onmousemove = (e) => updateP(e.target.value);

};

function updateGrid (value) {
    console.log(value);
    numberClone = `${value * value}`;
    console.log(numberClone);

    const containerDiv = document.querySelector(".containerDiv");
    containerDiv.innerHTML = "";
    createGrid(numberClone);
    refreshClones();    
};


function updateP (value) {   
    const sizeP = document.querySelector(".sizeP");
    sizeP.innerText = `Grid size: ${value} * ${value}`;
}

function paintGrid (e) {
    if (colorGridMode == 'random') {
        let randR = Math.floor(Math.random() * 256);
        let randG = Math.floor(Math.random() * 256);
        let randB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`        
    } else if (colorGridMode == 'color') {
        e.target.style.backgroundColor = 'rgb(65, 65, 65)';
    } else if (colorGridMode == 'erase') {
        e.target.style.backgroundColor = 'white';
    } else if (colorGridMode = 'pencil') {
        /* bg color cannot be acessed directly, workaround: */
        const styles = window.getComputedStyle(e.target);
        const backgroundColor = styles.backgroundColor;
            
        /* Avoids NaN when dealing with sub 10 rgb numbers */
        function cutString () {
            if (backgroundColor.length === 18) {
                const bgToNumber = backgroundColor.slice(4, 17);  
                return bgToNumber;
            } else if (backgroundColor.length === 15) {
                const bgToNumber = backgroundColor.slice(4, 14);                
                return bgToNumber;
            } else return "";
        };          
    
        /*cuts rgb from string, converts to array, converts to array
        of numbers, subtracts 25 from rgb value and finally set the
        new bgcolor */        
        const bgToArray = cutString(backgroundColor).split(", ");
        const numberArray = bgToArray.map(Number);
        const subtractArray = numberArray.map(subtractNumber);

        function subtractNumber (value) {
            if (!value) return 0;
            else return value - 25;
        };        

        const newString = `rgb(${subtractArray})`;
        e.target.style.backgroundColor = newString;           

    };
};


