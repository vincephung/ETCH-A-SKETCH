const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');

let initialSize = 4;

//create initial 4x4 grid
createGrid(initialSize);

//function to create grid
function createGrid(size){
    container.style.gridTemplateColumns = "repeat(" + size + ",auto)";

    for(let i = 0; i < size*size;i++){
        let newSquare = document.createElement('div');
        newSquare.id = 'squareDiv' + i;
        newSquare.className = 'squareDiv';
        container.appendChild(newSquare);      
        newSquare.style.border = "solid 1px black";
        newSquare.addEventListener('mouseenter',()=> newSquare.style.backgroundColor = randomColor());
    }

}

function randomColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    
}


//clear button
clearBtn.addEventListener('click',reset);

function reset(e){
    let size = prompt("Choose new square dimensions: ");
    deleteSquares();
    createGrid(size);
   
}

function deleteSquares(){
    const squares = document.querySelectorAll('.squareDiv');

    squares.forEach(square => {
        square.parentNode.removeChild(square);
    })
}


