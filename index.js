let red = 50;
let blue = 50;

document.addEventListener('DOMContentLoaded', () => {
    let rightPlayerContainer = document.querySelector(".blue-container");
    let leftPlayerContainer = document.querySelector(".red-container");
    document.addEventListener('keydown', (event) => {
        if(event.key == "a"){
            addPointsToLeftPlayer();
        }
        if(event.key == "l"){
            addPointsToRightPlayer();
        }
        leftPlayerContainer.style.width = red+"%"
        rightPlayerContainer.style.width = blue+"%"
        if(checkIfBlueWinGame({redPlayer: red, bluePlayer: blue})){
            alert("player blue wins!");
            event.stopPropagation();
        }
        if(checkIfRedWinGame({redPlayer: red, bluePlayer: blue})){
            alert("player red wins!");
            event.stopPropagation();
        }
    }, false);
});


const addPointsToLeftPlayer = () => {
    red += 5;
    blue -= 5;
    console.log({"red": red, "blue": blue})
}

const addPointsToRightPlayer = () => {
    blue += 5;
    red -=5;
    console.log({"red": red, "blue": blue})
}

const checkIfBlueWinGame = ({redPlayer, bluePlayer}) => {
    if(redPlayer === 0 && bluePlayer === 100) return true;
    return false;
}
const checkIfRedWinGame = ({redPlayer, bluePlayer}) => {
    if(redPlayer === 100 && bluePlayer === 0) return true;
    return false;
}