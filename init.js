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
    ctx.lineWidth = 0.35

    for (let x = 0; x < width; x += step) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()

      ctx.fillText(x, x, 12)
    }


    for (let y = 0; y < height; y += step) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()

      ctx.fillText(y, 0, y)
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

  // const mySquare = new Rectangle(400, 85, 50, 50, 'gold')
  // mySquare.draw(ctx)

  // const childrenSquares = [
  //   // top side square - align x with mySquare's left side
  //   // align bottom with top of mySquare
  //   new Rectangle(mySquare.left, mySquare.top - 50, 50, 50, 'red'),

  //   // right side square - align x with right side of mySquare
  //   // align top with mySquare top
  //   new Rectangle(mySquare.right, mySquare.top, 50, 50, 'green'),

  //   // bottom square
  //   new Rectangle(mySquare.left, mySquare.bottom, 50, 50, 'blue'),

  //   // left square
  //   new Rectangle(mySquare.left - 50, mySquare.top, 50, 50, 'magenta')
  // ]
  // childrenSquares.forEach(square => square.draw(ctx))
}


