const containerDiv = document.querySelector('#container');
const arrayWithAllDivs = [];


for(let i = 1; i < 17; i++){
    const createDiv = document.createElement('div');
    containerDiv.appendChild(createDiv);
    createDiv.setAttribute("id", i);
    createDiv.className = "boardDivs";

    arrayWithAllDivs[i] = createDiv;
}

console.log(arrayWithAllDivs);

