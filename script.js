const containerDiv = document.querySelector('#container');
const containerDivEL = document.getElementById('container');
const individualDivs = document.getElementsByClassName('singleDiv');
const sliderHeader = document.getElementById('sliderHeader');
const slider = document.getElementById('slider');
const sliderValue = slider.getAttribute('value');

var resolution = sliderValue;

var canPaint = false; 



for(let i = 1; i < resolution; i++){
    const createDiv = document.createElement('div');
    containerDiv.appendChild(createDiv);
    createDiv.className = "divGroup";
    createDiv.setAttribute("id", "row" + i)

    for(let n = 1; n < resolution; n++){
        var rowDiv = document.createElement('div');
        createDiv.appendChild(rowDiv);
        rowDiv.classList.add("singleDiv");
        rowDiv.setAttribute("onmouseover", "addColorClass(this)");
              
    }
    
}

sliderHeader.textContent = sliderValue.toString();

function addColorClass(element){  
    if(!canPaint) return;
       element.classList.add("giveColorClass");
       
}

// function displayResolution(element, varibleToDisplay) {
//     element.textContent = varibleToDisplay.toString;
// }

// slider.addEventListener('change', displayResolution(sliderHeader, resolution));

containerDivEL.onmousedown = function () {canPaint = true; console.log(canPaint);}
containerDivEL.onmouseup = function () {canPaint = false; console.log(canPaint);}
containerDivEL.onmouseleave = function () {canPaint = false; console.log(canPaint);}










