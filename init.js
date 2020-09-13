import { Rectangle } from './Rectangle.js'

export function init() {
  const canvas = document.getElementById('gameCanvas')
  const ctx = canvas.getContext('2d')
  function createGrid() {
    // draw a line every *step* pixels
    const step = 50

    // our end points
    const width = canvas.width
    const height = canvas.height

    ctx.save()
    ctx.strokeStyle = 'gray' // line colors
    ctx.fillStyle = 'black'
    ctx.font = '14px Monospace'
    ctx.lineWidth = 0.39

    for (let x = 0; x <= width; x += step) {
      ctx.fillText(x, x, 12)
    }

    for (let y = 0; y <= height; y += step) {
      ctx.fillText(y, 0, y)
    }

    for (let x = 0; x < width; x += step) {
      for (let y = 0; y < height; y += step) {
        if(x>y){
          drawCircle(ctx, x, y, 1, '#aaa')
        }
      }
    }

    ctx.restore()
  }

  createGrid()

  ctx.save()
  ctx.strokeStyle = 'black'
  ctx.fillStyle = 'red'

  // x, y, radius, startAngle, endAngle, antiClockwise = false by default
  ctx.beginPath()
  ctx.arc(50, 300, 15, 0, 2 * Math.PI, false) // full circle
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(100, 300, 15, 0, Math.PI, true)
  ctx.fill()
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(150, 300, 15, 0, Math.PI)
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.fillStyle = 'gold'
  ctx.arc(200, 300, 15, 0.1 * Math.PI, 1.85 * Math.PI)
  ctx.lineTo(200, 300)
  ctx.fill()

  ctx.restore()

}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {string} color
 */
function drawCircle(ctx, x, y, radius, color) {
  ctx.save()
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}


