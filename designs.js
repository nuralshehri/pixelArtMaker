// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const form = document.getElementById('sizePicker') ;
const rowsNumber = document.getElementById('inputHeight') ;
const cellsNumber = document.getElementById('inputWidth') ;
const pixelCanvas = document.getElementById('pixelCanvas') ;

// When size is submitted by the user, call makeGrid()

function makeGrid() {
 for (let x = 0; x < rowsNumber.value ; x ++) {
  const insertRow = pixelCanvas.insertRow(0) ;
  for (let y = 0 ; y < cellsNumber.value ; y ++) {
    insertRow.insertCell(0) ;
  }
 }
}

form.addEventListener('submit' ,function (e) {
  pixelCanvas.innerHTML = "" ; // to clear the old cavans
  e.preventDefault() ; // to tell the browser we don't want it to act

makeGrid() ;

} ) ;

// if the user clicks on a cell , cahnge the color to his choice
 pixelCanvas.addEventListener('click' , function(e) {
 if (e.target.nodeName === 'TD') {
    e.target.style.backgroundColor = colorPicker.value ;
  }
} ) ;
