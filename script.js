const canvas = document.getElementById('rainbowCanvas');
const ctx = canvas.getContext('2d');

const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
];

let startAngle = 0;

function drawRainbow() {
    const radius = canvas.height / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - (i * 20), startAngle, startAngle + Math.PI, false);
        ctx.lineWidth = 20;
        ctx.strokeStyle = colors[i];
        ctx.stroke();
    }

    startAngle += 0.01; // Adjust this value to change the speed of the animation

    requestAnimationFrame(drawRainbow);
}

drawRainbow();
