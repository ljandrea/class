// Drawing circles in an svg with JavaSciprt 
'use strict';

// Constants / global variables
const height = 255;
const width = 255;
const fill = '#d3d3d3';
const namespace = 'http://www.w3.org/2000/svg';

// State of our application
let state = {
    circles: []
};

// Create a `p` element DOM
<<<<<<< HEAD
let p = document.createElement('p');

// Set the inner HTML of the paragraph to be some bold text
p.innerHTML = '<strong>This is my paragraph</strong>';

// Select the element with class `container`, and append the paragraph to it
document.querySelector('.container').appendChild(p);

// Select `svg` element from the DOM
let svg = document.querySelector('svg');

// Set the width and height attributes using `setAttribute`
svg.setAttribute('height', height);
svg.setAttribute('width', width);
=======


// Set the inner HTML of the paragraph to be some bold text


// Select the element with class `container`, and append the paragraph to it


// Select `svg` element from the DOM


// Set the width and height attributes using `setAttribute`

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106

// Add a `rect` with the same width and height, and set the fill to `fill`
// Note, you'll have to use `createElementNS` with our namespace
// Also, set the pointerEvents to 'none'. Then, append this `rect` to the svg
<<<<<<< HEAD
let rect = document.createElementNS(namespace, 'rect');
rect.setAttribute('x', 0);
rect.setAttribute('y', 0);
rect.setAttribute('width', width);
rect.setAttribute('height', height);
rect.setAttribute('fill', fill);
rect.style.pointerEvents = 'none';
svg.appendChild(rect);

// Create a button with class "btn center-align" and append it to the element with class container.
// You want to have it *inserted before* the div with class `svg-wrapper`
let button = document.createElement('button');
button.className = "btn center-align";
button.textContent = "Clear";
let svgWrapper = document.querySelector('.svg-wrapper')
document.querySelector('.container').insertBefore(button, svgWrapper);
=======


// Create a button with class "btn center-align" and append it to the element with class container.
// You want to have it *inserted before* the div with class `svg-wrapper`

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106

// Function to render a circle in a parent element
function renderCircle(coord, parent) {
    // Create the circle
<<<<<<< HEAD
    let circle = document.createElementNS(namespace, 'circle');
    circle.setAttribute('cx', coord.x);
    circle.setAttribute('cy', coord.y);
    circle.setAttribute('r', 10);

    // Define styles
    circle.style.opacity = 0.3;
    circle.style.pointerEvents = 'none';
    circle.style.fill = `rgb(0, ${coord.x}, ${coord.y}`;

    // Append
    parent.appendChild(circle);
=======


    // Define styles

    // Append

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
}

// Function to draw all circles in a parent
function drawCircles(data, parent) {
<<<<<<< HEAD
    data.forEach(function (d) {
        renderCircle(d, parent);
    });
=======

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
}

// Function to clear circles from a parent
function clearCircles(parent) {
<<<<<<< HEAD
    let elems = parent.querySelectorAll('circle');
    elems.forEach(function (d) {
        parent.removeChild(d);
    });
=======

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
}

// Assign event listener - on click:
// - push a new data element into the state
// - call the `update` function
<<<<<<< HEAD
svg.addEventListener('click', function (event) {
    state.circles.push({ x: event.offsetX, y: event.offsetY });
    update();
});
=======

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106

// Update function: call `clearCircles`, `drawCircles`, and `updateText`
function update() {
    // Clear container
<<<<<<< HEAD
    let container = svg;

    // Update container contents
    clearCircles(container);
    drawCircles(state.circles, container);
    updateText(state.circles);
=======

    // Update container contents

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
}

// Text function: change paragraph text to display the number of circles, and avg. color.
// Avg. color (in rgb) is the avg. x position (green) and avg. y position (blue)
// Set the text to be that color
function updateText(data) {
<<<<<<< HEAD
    let text = document.querySelector('p');

    // Compute average in x direction (green)
    let green = Math.floor(data.reduce(function (a, b) {
        return a + b.x;
    }, 0) / data.length);

    // Compute average in x y direction (blue)
    let blue = Math.floor(data.reduce(function (a, b) {
        return a + b.y;
    }, 0) / data.length);

    // Set values to 0 if there is no data
    green = data.length === 0 ? 0 : green;
    blue = data.length === 0 ? 0 : green;

    // Set text string and the color of the element
    text.innerHTML = `There are ${data.length} circles and the average color is rgb(0, ${green}, ${blue})`;
    text.style.color = `rgb(0, ${green}, ${blue}`;
=======
    // Compute average in x direction (green)


    // Compute average in x y direction (blue)


    // Set values to 0 if there is no data


    // Set text string and the color of the element

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
}

// Assign an event listener for the `clear` button
// Reset state.circles to an empty array and then `update`
<<<<<<< HEAD
button.addEventListener('click', function () {
    state.circles = [];
    update();
}); 
=======
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
