
var individualDivs = [];
var rows = [];

const containerDiv = document.querySelector('#container');

const sliderHeader = document.querySelector('#sliderHeader');
const slider = document.querySelector('#slider');
const checkbox = document.querySelector('#checkbox');
var resolution;

var canPaint = false;
var randomColorMode = false;

sliderHeader.textContent = slider.getAttribute('value');
slider.oninput = function () {
    sliderHeader.textContent = this.value;
    resolution = this.value;
}

slider.addEventListener('click', generateCanvas);
checkbox.addEventListener('change', function () {
    if(this.checked){
        randomColorMode = true;
    }
    else {randomColorMode = false;};
   
});

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
            rowDiv.setAttribute("onmouseover", "addColorClass(this); addRandomColor(this);");
                  
        }
        
    }
    individualDivs = document.querySelectorAll('.singleDiv');
    rows = document.querySelectorAll('.divGroup');

    containerDiv.style.boxShadow = "5px 5px black";
    
    
}


function addColorClass(element){  
    if(!canPaint) return;
    if(randomColorMode) return;
       element.classList.add("giveColorClass");
       
}

function addRandomColor(element){
    if(!canPaint) return;
    if(randomColorMode){
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        element.style.backgroundColor = "#" + randomColor;
    }
}

containerDiv.onmousedown = function () {canPaint = true;}
containerDiv.onmouseup = function () {canPaint = false;}
containerDiv.onmouseleave = function () {canPaint = false;}











