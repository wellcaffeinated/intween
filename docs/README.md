---
home: true
actionText: Get Started →
actionLink: /guide/
features:
- title: Interactive Tweens
  details: Tweens that can accept user interaction (meddling) in flight, and then gracefully return to the intended state.
- title: Highly Configurable
  details: Control exactly how and when data structures transition between each other.
- title: Powerful but Minimalistic
  details: Easy to get started, but scales well to support incredibly complex projects.

footer: MIT Licensed | Copyright © 2019-present Jasper Palfree
---

<style>
.homepage-demo .outline, .homepage-demo .circle, .homepage-demo .target {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  margin-left: -18px;
  margin-top: -18px;
  border: 2px solid #af6a3e;
  border-radius: 50%;
}
.homepage-demo .outline {
  z-index: 2;
}
.homepage-demo .target {
  width: 100px;
  height: 100px;
  margin-left: -50px;
  margin-top: -50px;
  border: none;
  background: none;
}
.homepage-demo .circle {
  background: #af6a3e;
  border-color: #af6a3e;
  z-index: 1;
}
.homepage-demo.circuit {
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
  border: 2px dashed #3a5169;
  text-align: center;
  font-size: 24px;
  color: #3a5169;
  line-height: 200px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 3rem;
  transform: translateZ(0);
}
</style>

<div ref="circuit" class="homepage-demo circuit">
  <div ref="outline" class="outline"></div>
  <div ref="circle" class="circle"></div>
  <span>Click!</span>
</div>

It doesn't take much code to create something playful!

:::details See the code!

```javascript
const tween = new Tween({
  circle: [0, 0],
  outline: [0, 0]
}).loop()

tween.in('2s', {
  circle: [200, 0],
  outline: [200, 0]
}, 'quintInOut')
.in('2s', {
  circle: [200, 200],
  outline: [200, 200]
}, 'bounceOut')
.in('2s', {
  circle: [0, 200],
  outline: [0, 200]
}, 'backInOut')
.in('2s', '1s', {
  circle: [0, 0],
  outline: [0, 0]
}, 'elasticOut')

const meddle = new Meddle(tween).easing('quadInOut')

let lastPos = [0, 0]
const sub = animationFrames().pipe(
  spreadAssign(
    tween,
    meddle
  )
  , animationThrottle()
).subscribe(state => {
  lastPos = state.circle
  circleEl.style.transform = `translate(${state.circle[0]}px, ${state.circle[1]}px)`
  outlineEl.style.transform = `translate(${state.outline[0]}px, ${state.outline[1]}px)`
})

const clicks = new Subject()

const sub2 = clicks.pipe(
  smoothen(
    {
      duration: '.3s',
      easing: 'quadIn + backOut'
    },
    () => ({ pos: lastPos })
  )
).subscribe(({ pos }) => meddle.set({ circle: pos }))

const onInteract = e => {
  const ctx = circuitEl.getBoundingClientRect()
  let [x, y] = [e.clientX, e.clientY]
  x -= ctx.x
  y -= ctx.y
  clicks.next({ pos: [x, y] })
}

window.addEventListener('click', onInteract)
```

:::

<script>
import { Tween, animationFrames, Meddle, spreadAssign, animationThrottle, smoothen, Subject } from 'intween'

export default {
  name: 'Home',
  data: () => ({
    state: {}
  }),
  mounted(){
    const circuitEl = this.$refs.circuit
    const circleEl = this.$refs.circle
    const outlineEl = this.$refs.outline
    const tween = new Tween({
      circle: [0, 0],
      outline: [0, 0]
    }).loop()

    tween.in('2s', {
      circle: [200, 0],
      outline: [200, 0]
    }, 'quintInOut')
    .in('2s', {
      circle: [200, 200],
      outline: [200, 200]
    }, 'bounceOut')
    .in('2s', {
      circle: [0, 200],
      outline: [0, 200]
    }, 'backInOut')
    .in('2s', '1s', {
      circle: [0, 0],
      outline: [0, 0]
    }, 'elasticOut')

    const meddle = new Meddle(tween).easing('quadInOut')

    let lastPos = [0, 0]
    const sub = animationFrames().pipe(
      spreadAssign(
        tween,
        meddle
      )
      , animationThrottle()
    ).subscribe(state => {
      lastPos = state.circle
      circleEl.style.transform = `translate(${state.circle[0]}px, ${state.circle[1]}px)`
      outlineEl.style.transform = `translate(${state.outline[0]}px, ${state.outline[1]}px)`
    })

    const clicks = new Subject()

    const sub2 = clicks.pipe(
      smoothen(
        {
          duration: '.3s',
          easing: 'quadIn + backOut'
        },
        () => ({ pos: lastPos })
      )
    ).subscribe(({ pos }) => meddle.set({ circle: pos }))

    const onInteract = e => {
      const ctx = circuitEl.getBoundingClientRect()
      let [x, y] = [e.clientX, e.clientY]
      x -= ctx.x
      y -= ctx.y
      clicks.next({ pos: [x, y] })
    }

    window.addEventListener('click', onInteract)

    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('click', onInteract)
      sub.unsubscribe()
      sub2.unsubscribe()
    })
  }
}

</script>
