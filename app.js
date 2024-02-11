// make object called 'colors'
const colors = ["purple", "green", "orange", "#f15025"];
// make object called button that is identified in .html
const button = document.getElementById('button');
// make object color that calls the colors object
const color = document.querySelector(".colors");

// create function that chooses random number
function getRandoNumber() {
    return Math.floor(Math.random() * colors.length);
};

// create function that changes color by clicking 
button.addEventListener('click', function() {
    // define random number object to the random number function generator
    const randomNumber = getRandoNumber();
    console.log(randomNumber);
    
    // generate random color with above index and assign it to background color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})
