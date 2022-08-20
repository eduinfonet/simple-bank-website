/*  -------------------------------------------------------------------------------          Backgroung color change using onclick or addEventListener 
----------------------------------------------------------------------------*/


// option 01: directly set on the HTML element
/* HTML element -->  <button onclick="document.body.style.backgroundColor = 'yellow'">Background Yellow</button>*/

// option 2 : add onclick function on the HTML element
// IMPORTANT!  HTML Element -- > <button onclick="makeRed()">Background Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3 : add onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue (){
    document.body.style.backgroundColor = 'blue';
}

// option 3 another : add onclick function
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple (){
    document.body.style.backgroundColor = "purple";
}



// option 4 : addEvenListener
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener("click", makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}


// option another 4 : addEvenListener

const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

//IMPORTANT! final system using addEventListener we will use it or system two -

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})







    /*--------------------------------------------------------------------------          Text change using onclick or addEventListener 
----------------------------------------------------------------------------*/


// option 01 :  changing text
function handleOnClick(){
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = 'Handled by function attached on onclick attrebute';
}

// option 02 :  changing text

 document
   .getElementById("event-listener")
   .addEventListener("click", function () {
     const handlerStatus = document.getElementById("handler-status");
     handlerStatus.innerText = "Text updated by add Event Listener Button";
   });




document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Text updated by add Event Listener Button";
  });
   

//option 02 : recap
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.innerText;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputText = '';
})



// -------------------comment-box--------------------------------

// step-1: add event listener to the post button
document.getElementById("btn-post").addEventListener("click", function () {
  // step-2: get the comment
  const commentBox = document.getElementById("new-comment");
  const newComment = commentBox.value;
  console.log(newComment);
});
