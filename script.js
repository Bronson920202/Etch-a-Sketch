const containerDiv = document.querySelector('#container');
const containerDivEL = document.getElementById('container');
const individualDivs = document.getElementsByClassName("singleDiv");
var canPaint = false; 
console.log(containerDivEL);





for(let i = 1; i < 17; i++){
    const createDiv = document.createElement('div');
    containerDiv.appendChild(createDiv);
    createDiv.className = "divGroup";
    createDiv.setAttribute("id", "row" + i)

    for(let n = 1; n < 17; n++){
        var rowDiv = document.createElement('div');
        createDiv.appendChild(rowDiv);
        rowDiv.classList.add("singleDiv");
        rowDiv.setAttribute("onmouseover", "addColorClass(this)");
              
    }
    
}

function addColorClass(element){  
    if(!canPaint) return;
       element.classList.add("giveColorClass");
       
}

containerDivEL.onmousedown = function () {canPaint = true; console.log(canPaint);}
containerDivEL.onmouseup = function () {canPaint = false; console.log(canPaint);}










