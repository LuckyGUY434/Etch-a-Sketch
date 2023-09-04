
document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded')
const gridContainer = document.querySelector('.gridContainer')
let gridSize = 16;
const rangeSlider = document.getElementById('range-slider')
const gridSizeText = document.querySelector('.gridText')
const clearBtn = document.querySelector('.clear')
const darkColorButton = document.querySelector('.black-color-div')
const rgbButton = document.querySelector('.rgb-color')

let colorMode ='default';



function createGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

for(let i = 0; i < gridSize; i++){
    for (let j = 0; j < gridSize; j++){
        let button = document.createElement('div')
        button.classList.add('buttons')
        gridContainer.appendChild(button)
        }
    }

    const buttons = document.querySelectorAll('.buttons');
    
    buttons.forEach((button) => {
        button.addEventListener('mouseover', () => {
            if (colorMode == 'black') {
                button.style.backgroundColor = 'black';
            } else if (colorMode === 'rgb') {
                button.style.backgroundColor = getRandomRgbColor();
            }
        });        
    });
    gridContainer.style.setProperty('--grid-size', gridSize);    
}

function getRandomRgbColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);

    return `rgb(${red}, ${green}, ${blue})`;
}

darkColorButton.addEventListener('click', () => {
    colorMode = 'black';
})

rgbButton.addEventListener('click', () => {
    colorMode = 'rgb';
})
createGrid()

rangeSlider.addEventListener('input', () => {
    gridSize = rangeSlider.value;
    createGrid();
    gridSizeText.textContent = `Grid size: ${gridSize}x${gridSize}`
    
})

clearBtn.addEventListener('click', () => {
    // Clear the grid by calling createGrid() again
    colorMode = 'default';
    createGrid();
    
});

});
