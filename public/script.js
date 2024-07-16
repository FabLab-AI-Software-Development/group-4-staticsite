function growButton() {
    var button = document.getElementById("growButton");
    var currentWidth = button.offsetWidth;
    var currentHeight = button.offsetHeight;
    button.style.width = (currentWidth + 10) + 'px';
    button.style.height = (currentHeight + 5) + 'px';
}

const butt1 = document.getElementById('butt1');

//open picture when click button
function picture(){document.getElementById('pic').removeAttribute('hidden')};
butt1.addEventListener('click', picture);

