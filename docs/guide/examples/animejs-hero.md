# Simple moving box

<p id="easing-name"></p>
<div class="easing-visualizer">
  <div id="dots-wrapper" class="wrapper dots-wrapper"></div>
</div>

<script>

function createDots(count){
  const wrapper = document.getElementById('dots-wrapper')
  const dots = []
  for (let i = 0; i < count; i++){
    const div = document.createElement('div')
    div.className = 'dot'
    wrapper.appendChild(div)
    dots.push(div)
  }
  return dots
}

function run(){
  const easingNameEl = document.getElementById('easing-name')
  const wrapperHeight = 455
  const numDots = 100
  const easings = Object.keys(InTween.Easing)
    .filter(k => k.substring(0, 4) !== 'make')
  const dots = createDots(numDots)
  const startPos = dots.map(() => 0.5)
  const tween = InTween.Tween.create({
    positions: startPos,
    easingName: {
      type: String,
      value: 'start',
      interpolator: InTween.Interpolators.makeToggle(0)
    }
  }).loop()

  // bad shuffle
  easings.sort(() => Math.random() - 0.5)

  easings.forEach((easingName) => {
    const easing = InTween.Easing[easingName]
    let positions = dots.map((div, i) => easing(i / numDots))
    const min = positions.reduce((m, y) => Math.min(m, y), 0)
    positions = positions.map(y => y - min)
    const max = positions.reduce((m, y) => Math.max(m, y), 1)
    positions = positions.map(y => y / max)

    tween.in('0.7s', '70%', { positions }, easing)
    tween.in(0, '0.7s', { easingName })
  })

  tween.in('0.7s', { positions: startPos, easingName: 'return' })

  let text = ''
  InTween.animationFrames().pipe(tween).subscribe(state => {
    dots.forEach((div, i) => {
      const pos = (0.5 - state.positions[i]) * wrapperHeight
      div.style.transform = `translateY(${pos}px)`
      if (state.easingName !== text){
        text = easingNameEl.innerText = state.easingName
      }
    })
  })
}

export default {
  name: 'Demo',
  mounted(){
    run()
  }
}

</script>
<style>
.easing-visualizer {
  background: #252423;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 910px;
  height: 455px;
  position: relative;
}
.bars-wrapper, .dots-wrapper {
  transform: translateZ(0);
}
.easing-visualizer .wrapper {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.easing-visualizer .dot {
  position: relative;
  width: 10px;
  height: 10px;
  margin: 0;
  background-color: currentColor;
  border-radius: 50%;
  color: #FF4B4B;
}
</style>
