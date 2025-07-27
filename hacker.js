const canvas = document.getElementById("hudCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let boxes = [];
for (let i = 0; i < 20; i++) {
  boxes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 20 + Math.random() * 30,
    speed: 0.5 + Math.random()
  });
}

function drawBoxes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(0,255,255,0.5)";
  ctx.lineWidth = 2;
  boxes.forEach(box => {
    ctx.strokeRect(box.x, box.y, box.size, box.size);
    box.y += box.speed;
    if (box.y > canvas.height) box.y = -box.size;
  });
}

setInterval(drawBoxes, 30);
