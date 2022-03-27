{/* 

<button onclick="console.log(this)">Click Me!</button> 

*/}


//OR


{/*

<button onclick="changeColor()">Click Me!</button>

function changeColor() {
    this.style.color='teal';
  } 

The above code won't work as expected. 

As we have seen in the Rule 4, here this will be bound to the global object (in the 'non-strict' mode)
 where there is no style object to set the color.

*/}