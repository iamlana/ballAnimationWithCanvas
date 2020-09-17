export function finallySomeBalls() {
  const canvas = document.getElementById('gameCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2;
  let y = canvas.height / 6;
  let ballRadius = 5;
  let radians = 0;



  function move() {
    radians += 0.05;
    x = x + Math.cos(radians) * 10;
    y = y + Math.sin(radians) * 10;
    console.log(x,y)
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
  }

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgb(255,223,0, 0.4)';
    
    ctx.fill();
    ctx.closePath();
  }

  // window.requestAnimationFrame(move)
  setInterval(move, 50);
}

