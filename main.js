const body = document.querySelector("body");
const defaultMode = 'color'
let defaultNumberClone = 256; // used in createGrid
let colorGridMode = defaultMode;
let numberClone = defaultNumberClone;
   
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

    mainDiv.appendChild(lateralDiv);
    mainDiv.prepend(containerDiv);     
    createGrid(containerDiv);       
};

function createGrid (containerDiv) {
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
    mainDiv.style.padding = '1rem';
    
    const containerDiv = document.querySelector('.containerDiv');
    containerDiv.style.display = 'grid';
    containerDiv.style.gridTemplateColumns = `repeat(16, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(16, 1fr)`; 
    containerDiv.style.height = '37rem';
    containerDiv.style.width = '37rem';
    
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

    const cloneDiv = document.querySelectorAll(".cloneDiv");
    cloneDiv.forEach (clone => clone.style.backgroundColor = 'white'); 

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.style.background = 'background:rgb(173, 181, 197)');
    buttons.forEach(button => button.style.fontSize ='1rem');
    buttons.forEach(button => button.style.border = '.1rem solid rgb(65, 65, 65)');
    buttons.forEach(button => button.style.borderRadius = '.5rem');
    buttons.forEach(button => button.style.color = "rgb(65, 65, 65)");
    buttons.forEach(button => button.style.padding = '1rem');



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
};

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
                console.log(backgroundColor);
                const bgToNumber = backgroundColor.slice(4, 17);  
                console.log(bgToNumber + typeof bgToNumber);
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
        console.log(bgToArray);
        const numberArray = bgToArray.map(Number);
        console.log(numberArray);
        const subtractArray = numberArray.map(subtractNumber);
        console.log(subtractArray);

        function subtractNumber (value) {
            if (!value) return 0;
            else return value - 25;
        };        

        const newString = `rgb(${subtractArray})`;
        console.log(newString);
        e.target.style.backgroundColor = newString;           

    };
};

