export class Rectangle {
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

    draw(ctx) {
        ctx.save()
        ctx.fillStyle = this.fillColor
        ctx.lineWidth = this.strokeWidth
        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()
        ctx.stroke()
        ctx.restore()
    }
}
