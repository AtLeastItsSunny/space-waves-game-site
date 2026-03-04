// script.js

// Create an animation of space waves
function createSpaceWaves() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Space wave effect
        for (let i = 0; i < canvas.width; i += 10) {
            ctx.beginPath();
            ctx.moveTo(i, canvas.height / 2);
            ctx.bezierCurveTo(i + 5, canvas.height / 2 + Math.sin(time + i * 0.01) * 20, i + 5, canvas.height / 2 - Math.sin(time + i * 0.01) * 20, i + 10, canvas.height / 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.stroke();
        }

        // Twinkling stars
        for (let j = 0; j < 100; j++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
            ctx.fillRect(x, y, 2, 2);
        }

        time += 0.05;
        requestAnimationFrame(animate);
    }

    animate();
}

// Call function to start animation
createSpaceWaves();
