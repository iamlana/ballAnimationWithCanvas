let canvas, ctx

function init() {
    canvas = document.getElementById('gameCanvas')
    ctx = canvas.getContext('2d')

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
}

class Rectangle {

    constructor(
        x = 0, y = 0,
        width = 0, height = 0,
        fillColor = '', strokeColor = '', strokeWidth = 2
    ) {
        this.x = Number(x)
        this.y = Number(y)
        this.width = Number(width)
        this.height = Number(height)
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.strokeWidth = strokeWidth
    }

    get area() {
        return this.width * this.height
    }

    get left() {
        return this.x
    }

    get right() {
        return this.x + this.width
    }

    get top() {
        return this.y
    }

    get bottom() {
        return this.y + this.height
    }

    draw() {
        const {
            x, y, width, height,
            fillColor, strokeColor, strokeWidth
        } = this
        ctx.save()
        ctx.fillStyle = fillColor
        ctx.lineWidth = strokeWidth
        ctx.beginPath()
        ctx.strokeStyle = strokeColor
        ctx.rect(x, y, width, height)
        ctx.fill()
        ctx.stroke()
        ctx.restore()
    }
}
const mySquare = new Rectangle(400, 85, 50, 50, 'gold')
mySquare.draw()

document.addEventListener('DOMContentLoaded', init)