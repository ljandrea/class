'use strict';

// Base of the api
const urlBase = "https://api.github.com/search/repositories?sort=stars&q=";

// Create a click event for your button
$('form').submit(function (event) {
    // Prevent the default behavior for your event
    event.preventDefault();

    // Get the value of your queryInput, and construct your API query
<<<<<<< HEAD
    let query = $('#queryInput').val();
    let url = urlBase + query;
=======
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106

    // Fetch the data at that URL, THEN
    // Return the `.json()` of the response, THEN
    // Pass the results to renderSearchResults, make sure to CATCH
    // Any of your errors
<<<<<<< HEAD
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(renderSearchResults)
        .catch(function (error) {
            console.error(error);
        });

    return false;
=======


    return false; // prevent unwanted page behavior
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
});

// Write a function to render an <li> inside of a parent
// You should display the title as a link, and
// The description of the repo
function renderItem(item, parent) {
<<<<<<< HEAD
    let ele = $('<li>');
    parent.append(ele);
    ele.append(`<strong><a href=${item.html_url}>${item.full_name}</a></strong>`);
    ele.append(`<span>: ${item.description}</span>`);
=======

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
}

// Write a function to render search results. 
// It should iterate through items and call the renderItem method
function renderSearchResults(results) {
    // Create a new ul as the parent + append it to the body
<<<<<<< HEAD
    let ul = $('<ul>');
    $('#content').append(ul);

    // Iterate through results and call the renderItem method
    results.items.map(function (d) {
        renderItem(d, ul);
    });
}


=======

    // Iterate through results and call the renderItem method

}
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
