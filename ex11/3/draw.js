function animateCanvas() {
    //global canvas
    var canvas = document.getElementById("the-canvas");
    var context = canvas.getContext("2d");

    var path = {centerX:250, centerY:190, radius:110, angle:0};
    var pos = {x:0, y:0, speed:.05};
    var doge = new Image();
    doge.src = "doge.jpg";

    //add the static circle and rectangle to the canvas
    function drawShapes() {
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
    }

    //place and animate the doge imgage to the canvas
    function drawImage() {
        pos.x = path.centerX + Math.cos(path.angle) * path.radius
        pos.y = path.centerY + Math.sin(path.angle) * path.radius

        path.angle += pos.speed;
        
        context.drawImage(doge, pos.x, pos.y);
    }

    //clear the canvas for each iteration, and draw the static shapes / image
    window.setInterval(function(){
        canvas.width = canvas.width;
        drawShapes();
        drawImage();
    }, 30);

};

//load the script when windows is loaded
window.addEventListener('load', function() {    
    animateCanvas();
});