//Author: MaestroJolly

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var inputColor, inputHeight, inputWeight, pixelCanvas, sizePicker;
inputColor = $( "#colorPicker" );
pixelCanvas = $( "#pixelCanvas" );


function makeGrid() {
  inputHeight = $( "#inputHeight" ).val();
  inputWeight = $( "#inputWeight" ).val();
  pixelCanvas.children().remove();
  for ( var row = 0; row < inputHeight; row++ ){
    pixelCanvas.append( "<tr></tr>" );
  }
  gridRows = $( "tr" );
  for ( var column = 0; column < inputWeight; column++ ){
      gridRows.append( "<td></td>" );
  }

  cell = pixelCanvas.find( "td" );

  cell.click( function () {
      var colorValue = $( "#colorPicker" ).val();
      $( this ).css("background-color", colorValue);
  });

}

$( "#sizePicker" ).submit( function( event ) {
  event.preventDefault();
  makeGrid();
});
