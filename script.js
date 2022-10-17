
var individualDivs = [];
var rows = [];

const containerDiv = document.querySelector('#container');

const sliderHeader = document.querySelector('#sliderHeader');
const slider = document.querySelector('#slider');
var resolution;

var canPaint = false; 

sliderHeader.textContent = slider.getAttribute('value');
slider.oninput = function () {
    sliderHeader.textContent = this.value;
    resolution = this.value;
}

slider.addEventListener('click', generateCanvas);

function generateCanvas() {    
    if(rows.length > 0){
            rows.forEach(element => element.remove());
            individualDivs.forEach(element => element.remove());
        }
        
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
    individualDivs = document.querySelectorAll('.singleDiv');
    rows = document.querySelectorAll('.divGroup');
    
    
}

function addColorClass(element){  
    if(!canPaint) return;
       element.classList.add("giveColorClass");
       
}

containerDiv.onmousedown = function () {canPaint = true; console.log(canPaint);}
containerDiv.onmouseup = function () {canPaint = false; console.log(canPaint);}
containerDiv.onmouseleave = function () {canPaint = false; console.log(canPaint);}










