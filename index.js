document.addEventListener('DOMContentLoaded', () => {
    let leftSideHTML = document.querySelector(".left-key");
    let rightSideHTML = document.querySelector(".right-key");
    leftSideHTML.addEventListener('click', () => alert("left"));
    rightSideHTML.addEventListener('click', () => alert("right"));
});