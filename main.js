const body = document.querySelector("body");

createBaseHtml();
createContainer();

function createBaseHtml () {
    const headerDiv  = document.createElement("div");
    headerDiv.setAttribute("class", "header");
    headerDiv.textContent = "I'm the header!";
    body.prepend(headerDiv);

    const mainDiv  = document.createElement("div");
    mainDiv.setAttribute("class", "main");
    mainDiv.textContent = "I'm the mainDiv!";
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
    lateralDiv.textContent = "I'd be a lateral menu!"

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
        containerDiv.appendChild(cloneDiv);        
    }

};



