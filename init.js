import { Rectangle } from './Rectangle.js'

export function init() {
  const canvas = document.getElementById('gameCanvas')
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.strokeRect(50, 35, 50, 50)

  ctx.beginPath()
  ctx.fillRect(125, 35, 50, 50)

  ctx.beginPath()
  ctx.strokeStyle = 'red'
  ctx.fillStyle = 'blue'
  ctx.lineWidth = 5
  ctx.rect(200, 35, 50, 50)
  ctx.fill()
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(275, 35, 50, 50)
  ctx.fill()
  ctx.stroke()

  const mySquare = new Rectangle(400, 85, 50, 50, 'gold')
  mySquare.draw(ctx)
}
