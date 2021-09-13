import { Smoothen, Subject } from 'intween'

const container = document.querySelector('.smoothen-demo')
const ball = document.querySelector('.smoothen-demo .ball')

const clicks = new Subject()

container.addEventListener('click', e => {
  const ctx = container.getBoundingClientRect()
  const position = [e.clientX - ctx.x - 25, e.clientY - ctx.y - 25]
  clicks.next({ position })
})

clicks.pipe(
  Smoothen({ duration: '1s', easing: 'quadOut' })
).subscribe(state => {
  // animates a div between clicks
  const [x, y] = state.position
  ball.style.transform = `translate(${x}px, ${y}px)`
})

// start at 0, 0
clicks.next({ position: [0, 0] })
