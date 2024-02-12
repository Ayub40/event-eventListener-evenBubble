// option 1: directly set on the HTML element
//  <button onclick="console.log(65)">Another Button</button>

// option 2: add onclick function on the html element
// IMPORTANT: We will use this
/* <button onclick="makeRed()">Make Red</button> */
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option: 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option: 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another 
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option: 4 Final
// IMPORTANT We will use sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function () {})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
// -----------------------------------------------------
// ---------------------25.5--------------------------------
// ---------------------25.5--------------------------------
// -----------------------------------------------------

//25.5---> Creat a comment box and display
// step-1: add event listener to the post button
document.getElementById('btn-post').addEventListener('click', function () {
    //step-2: get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    //step-3: set the comment inside the comment container
    //    1. get the comment container
    //    2.creat a new element (p tag)
    //    3.set the text of the comment as innerText of the p tag
    //    4.add the p tag using appendChild
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    //step-4:clear the text area
    commentBox.value = '';

})