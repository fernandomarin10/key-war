let red = 50;
let blue = 50;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        if(event.key == "a"){
            red += 5;
            blue -=5;
            console.log({"red": red, "blue": blue})
        }
        if(event.key == "l"){
            blue += 5;
            red -=5;
            console.log({"red": red, "blue": blue})
        }
      }, false);
});