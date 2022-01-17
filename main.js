const body = document.querySelector("body");
const containerDiv = document.createElement("div");
const sizeP = document.createElement("p");

const defaultMode = 'color';
const defaultSize = 16;
let numberClone = defaultSize;
let colorGridMode = defaultMode;

createHtml = () => {
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

    containerDiv.setAttribute("class", "containerDiv");

    const sizeDiv = document.createElement("div");
    sizeDiv.setAttribute("class", "sizeDiv");
   
    const sizeInpt = document.createElement("input");
    sizeInpt.setAttribute("class", "sizeInpt");

    sizeP.setAttribute("class", "sizeP");

    const gitLink = document.createElement("a");
    gitLink.setAttribute("class", "gitLink");

    const gitImg = document.createElement("img");
    gitImg.setAttribute("class", "gitImg");

    const footerDivP = document.createElement("p");
    footerDivP.setAttribute('class', 'footerDivP');
    
    footerDiv.appendChild(footerDivP);    
    footerDiv.appendChild(gitLink);
    gitLink.appendChild(gitImg);   
    sizeDiv.appendChild(sizeP);
    sizeDiv.prepend(sizeInpt);
    lateralDiv.appendChild(sizeDiv);
    mainDiv.appendChild(lateralDiv);    
    mainDiv.prepend(containerDiv);     
    createGrid(numberClone);       
};
createGrid = (numberClone) => {
    for (let i = 0; i < numberClone * numberClone; i++) {
        let cloneDiv = document.createElement("div");
        cloneDiv.setAttribute("class", "cloneDiv");
        containerDiv.style.gridTemplateColumns = `repeat(${numberClone}, 1fr)`;
        containerDiv.style.gridTemplateRows = `repeat(${numberClone}, 1fr)`; 
        /* calls painting function for every mouse move */
        cloneDiv.addEventListener("mouseover", paintGrid);       
        containerDiv.appendChild(cloneDiv);  
    };    
};
refreshClones = () => {
    const cloneDiv = document.querySelectorAll(".cloneDiv")
    cloneDiv.forEach(clone => clone.style.backgroundColor = 'white');
}
addCSS = () => {
    const body = document.querySelector("body");
    body.style.background = "rgb(224, 227, 230)";
    body.style.height = '100vh';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.margin = 0;
    body.style.textAlign = 'center';
    body.style.fontFamily = 'Arial';
    body.style.color = 'rgb(65, 65, 65)';

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
    
    containerDiv.style.display = 'grid';
    containerDiv.style.height = '40rem';
    containerDiv.style.width = '40rem';
    
    const headerDiv = document.querySelector(".headerDiv")
    const headerDivP = document.createElement("p");
    headerDivP.textContent = "Etch-a-Sketch";
    headerDiv.appendChild(headerDivP);

    headerDiv.style.backgroundColor = "background:rgb(173, 181, 197)";
    headerDiv.style.height = "3.5rem";
    headerDiv.style.display = "flex";
    headerDiv.style.padding = "1.5rem";
    headerDiv.style.alignText = "center";
    headerDiv.style.alignItems = "center";
    headerDiv.style.justifyContent = "center";
    headerDiv.style.fontSize = "5rem";
    headerDiv.style.fontWeight = 550;
 
    const footerDiv = document.querySelector(".footerDiv")    

    footerDiv.style.backgroundColor = 'rgb(116, 130, 141)'; 
    footerDiv.style.height = "1.5rem";
    footerDiv.style.margin = 0;
    footerDiv.style.fontSize = '1.1rem';
    footerDiv.style.display = "flex";
    footerDiv.style.padding = "1rem";
    footerDiv.style.alignText = "center";
    footerDiv.style.alignItems = "center";
    footerDiv.style.justifyContent = "center";
    footerDiv.style.gap = ".8rem";

    const footerDivP = document.querySelector(".footerDivP");
    footerDivP.textContent = "Copyright @gerijeb"
    footerDivP.style.color = "rgb(65, 65, 65)";

    const gitLink =  document.querySelector(".gitLink");
    gitLink.setAttribute("href", "https://github.com/gerijeb");
    gitLink.style.textDecoration = 'none';

    const gitImg = document.querySelector(".gitImg");
    gitImg.setAttribute("src", "./img/GitHub-Mark-32px.png");
    gitImg.setAttribute("width", "32px");
    gitImg.setAttribute("height", "32px");

    const sizeInpt = document.querySelector(".sizeInpt");
    sizeInpt.setAttribute("type", "range");
    sizeInpt.setAttribute("min", "4");
    sizeInpt.setAttribute("max", "170");
    sizeInpt.setAttribute("value", "16");

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
getEventListeners = () => {
    const switchWhiteBtn = body.querySelector(".switchWhiteBtn");
    switchWhiteBtn.addEventListener("click", () => colorGridMode = 'erase');
    const switchBlackBtn = body.querySelector(".switchBlackBtn");
    switchBlackBtn.addEventListener("click", () => {
        colorGridMode = 'color';
        refreshClones();
    });
    const switchRandBtn = body.querySelector(".randBtn");
    switchRandBtn.addEventListener("click", () => { 
        colorGridMode = 'random';
        refreshClones();
    });
    const switchPencilBtn = body.querySelector(".switchPencilBtn");
    switchPencilBtn.addEventListener("click", () => {
        colorGridMode = "pencil";
        refreshClones();
    });
    const eraseBtn = body.querySelector(".eraseBtn");
    eraseBtn.addEventListener("click", () => refreshClones());

    const sizeInpt = body.querySelector(".sizeInpt");    
    sizeInpt.onchange = (e) => updateGrid(e.target.value);
    sizeInpt.onmousemove = (e) => updateP(e.target.value);
};
updateGrid = (value) => {
    numberClone = `${value}`;
    containerDiv.innerHTML = "";
    createGrid(numberClone);
    refreshClones();    
};

updateP = (value) =>  sizeP.innerText = `Grid size: ${value} * ${value}`;

paintGrid = (e) => {
    switch (colorGridMode) {
    case ('random'): {
        let randR = Math.floor(Math.random() * 256);
        let randG = Math.floor(Math.random() * 256);
        let randB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
    } break; 
    case ('color'): {
        e.target.style.backgroundColor = 'rgb(65, 65, 65)';
    } break;
    case ('erase'): {
        e.target.style.backgroundColor = 'white';
    } break; 
    case ('pencil'): {
        /* bg color cannot be acessed directly, workaround: */
        const styles = window.getComputedStyle(e.target);
        const backgroundColor = styles.backgroundColor;
        /*cuts rgb from string, converts to array, converts to array
        of numbers, subtracts 25 from rgb value and finally set the
        new bgcolor */ 
            cutString = () => {
                if (backgroundColor.length === 18) {
                    const bgToNumber = backgroundColor.slice(4, 17);  
                    return bgToNumber;
                } else if (backgroundColor.length === 15) {
                    const bgToNumber = backgroundColor.slice(4, 14);                
                    return bgToNumber;
                } else return "";
            };          
            const bgToArray = cutString(backgroundColor).split(", ");
            const numberArray = bgToArray.map(Number);

            subtractNumber = (value) => {
                if (!value) return 0;
                else return value - 25;
            }; 

            const subtractArray = numberArray.map(subtractNumber);
            const newString = `rgb(${subtractArray})`;
            e.target.style.backgroundColor = newString;          
        } break;
    };
};
createHtml();
addCSS();
getEventListeners();