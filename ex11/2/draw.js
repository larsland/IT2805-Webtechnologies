function drawShapes() {
    var canvas = document.getElementById("the-canvas");
    var context = canvas.getContext("2d");
    
    var doge = new Image();
    doge.src = "doge.jpg";

    context.beginPath();
    context.arc(100, 75, 50, 0, 2*Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect(300, 200, 150, 100);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();

    context.drawImage(doge, 250, 60);
}



window.addEventListener('load', function() {    
    drawShapes();
});