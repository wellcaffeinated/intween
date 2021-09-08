# Scroll Animations

<div ref="scroll" class="scroll-area">
  <div ref="circle" class="circle"></div>
</div>

<style>
.scroll-area {
  min-height: 200vh;
}

.circle {
  position: fixed;
  top: 200px;
  left: 50%;
  background: steelblue;
  width: 200px;
  height: 100px;
  z-index: 1;
  transform: translateZ(0);
  color: #013663;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
</style>

<script>
export default {
  name: 'Demo',
  mounted(){
    const box = this.$refs.circle
    const contentHeight = this.$refs.scroll.getBoundingClientRect().height
    const scrollHeight = contentHeight - window.innerHeight

    const tween = new InTween.Tween({
      x: 0,
      y: 0,
      angle: 0,
      scale: [1, 1],
      text: 'Scroll Down!'
    })
      .in('1s', { angle: 360 }, 'quadInOut')
      .by('2s', { text: '' })
      .by('2s', { scale: [2, 1] }, 'backInOut')
      .by('2s', '1s', { x: 300, y: 200 }, 'quintInOut')
      .by('3s', { x: 0, y: 200 }, 'bounceOut')
      .in('1s', { angle: 0 }, 'quintInOut')
      .in('1s', '1s', { scale: [1, 1] }, 'elasticOut')
      .in('1s', { text: 'Well... that was easy' })

    const player = InTween.Player.create(tween.duration)
    const onScroll = (e) => {
      const ratio = window.scrollY / scrollHeight
      player.playTo(ratio * tween.duration | 0)
    }
    document.addEventListener('scroll', onScroll)

    // Start the tween immediately.
    const sub = player.pipe(tween)
      .subscribe((state) => {
        box.style.setProperty(
          'transform',
          `translate(${state.x}px, ${state.y}px) rotate(${state.angle}deg) scale(${state.scale.join(',')})`
        )

        if (state.text !== box.innerText){
          box.innerText = state.text
        }
      })

    this.$on('hook:beforeDestroy', () => {
      sub.unsubscribe()
      document.removeEventListener('scroll', onScroll)
    })
  }
}

</script>
