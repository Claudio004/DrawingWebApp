//function draw() {
//    ctx.clearRect(0, 0, canvas.width, canvas.height);

//    drawCircle(50, 50);
    
//      requestAnimationFrame(draw);
//}

//draw();

const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const penElement = document.getElementById("pennarello");
const matElement = document.getElementById("matita");
const nbElement = document.getElementById("nuovo");
const ctx = canvas.getContext("2d");

let size = 30; 
let isPressed = false;
let color = 'black';
let pennarello = false;
let matita = false;
let nuovo = false;

        canvas.addEventListener("mousedown", () => {
            isPressed = true;
        });

        canvas.addEventListener("mouseup", () => {
            isPressed = false;
        });

        canvas.addEventListener("mousemove", (e) => {
            if(isPressed) {
                const x = e.offsetX;
                const y = e.offsetY;

                if(pennarello) {
                    drawCircle(x, y);  
                };
                if(matita) {
                    drawLine(x,y);
                };
            };

        });

        function drawCircle(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        };

        function drawLine(x, y) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y);
            ctx.lineCap = "square";
            ctx.lineWidth= size;
            ctx.strokeStyle = color;
            ctx.stroke();
        };

        increaseBtn.addEventListener("click", () => {
            size += 5;

            if(size > 50) {
                 size = 50;
            };
            updateSizeOnScreen();
        });

        decreaseBtn.addEventListener("click", () => {
            size -= 5;

            if(size < 5) {
                size = 5;
            };

            updateSizeOnScreen();
        });

        function updateSizeOnScreen() {
            sizeElement.innerText = size;
        };

        colorElement.addEventListener("change", (e) =>{
            color = e.target.value;
        });

        penElement.addEventListener("click", () =>{
            pennarello = true;
            matita = false;
        });

        matElement.addEventListener("click", () =>{
            pennarello = false;
            matita = true;
        });