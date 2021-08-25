const { Tween, Observable, Easing } = InTween

// setup our instance
const tween = new Tween({
  y: {
    type: 0
  }
}).withTime('x')

Array(10).fill(0).forEach((_, i) => {
  const x = i * 40
  const y = Math.random() * 400
  tween.by(x, { y }, 'cubicInOut')
})

const canvas = document.getElementById('chart')
const ctx = canvas.getContext('2d')

const domain = Observable.from(Array(canvas.width).fill(0).map((_, x) => x))

ctx.strokeStyle = 'steelblue'
ctx.beginPath()
ctx.moveTo(0, 0)
domain.pipe(tween).subscribe({
  next: ({ x, y }) => {
    ctx.lineTo(x, y)
  }
  , complete: () => {
    ctx.stroke()
  }
})
