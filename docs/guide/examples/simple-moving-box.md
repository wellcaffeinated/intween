# Simple moving box

<script>

export default {
  name: 'Demo',
  mounted(){
    const box = document.createElement('div')
    box.style.setProperty('background-color', '#008800')
    box.style.setProperty('width', '100px')
    box.style.setProperty('height', '100px')
    document.body.appendChild(box)

    const tween = new InTween.Tween({ x: 0, y: 0 })
      .by('1s', { x: 300, y: 200 }, 'quadOut') // Move to (300, 200) in 1 second.
      // ...using an easing function to make the animation smooth.

    // Start the tween immediately.
    InTween.animationFrames()
      .pipe(tween)
      .subscribe((state) => {
        // Move 'box' to the position described by 'state' with a CSS translation.
        box.style.setProperty('transform', `translate(${state.x}px, ${state.y}px)`)
      })
  }
}

</script>
