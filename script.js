function generateColor() {

    // Variables containing random numbers to store the values of r, g and b
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);

    // Variable to store the generated color's code
    var generatedColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    //Change the color of the preview box 
    let item = document.querySelector('div');
    item.style.setProperty('background-color', generatedColor);

}

function copyCode() {
    // Variables containing random numbers to store the values of r, g and b
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);

    // Variable to store the generated color's code
    var generatedColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    //Copy the color code to clipboard
    navigator.clipboard.writeText(generatedColor);

    //Alert message
    alert("Color code copied to clipboard!");
}