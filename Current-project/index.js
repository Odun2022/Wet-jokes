// DOM Traversal
// 1. BY Id

// const grandparent = document.getElementById("grandparent-id");

// grandparent.style.backgroundColor = "#333"

/*
function changeColour(element) {
    element.style.backgroundColor = "#333"
}
changeColour(grandparent);
*/

// 2. By Class Name
/*
const parents = Array.from(document.getElementsByClassName("parent"));

function changeColour(element) {
    element.style.backgroundColor = "#333"
}
parents.forEach(changeColour);
*/

// Query Selector is used to change one element
/*
const grandparent = document.querySelector(".grandparent");

function changeColour(element) {
    element.style.backgroundColor = "#333"
}
changeColour(grandparent);

const parent = document.querySelector(".parent");

function changeColour(element) {
    element.style.backgroundColor = "#333"
}
changeColour(parent);
*/


// Query Selector All is used to change multiple elements
const parents = document.querySelectorAll(".parent")

function changeColour(element) {
    element.style.backgroundColor = "#333"
}
parents.forEach(changeColour);

