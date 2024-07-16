function growButton() {
    var button = document.getElementById("growButton");
    var currentWidth = button.offsetWidth;
    var currentHeight = button.offsetHeight;
    button.style.width = (currentWidth + 10) + 'px';
    button.style.height = (currentHeight + 5) + 'px';
}