<template lang="markdown">
<div class="try-it">
  <p><strong>Try it!</strong></p>
  <div ref="player"></div>
  <pre><code>{{ JSON.stringify(state, null, 2) }}</code></pre>
</div>
</template>

<script>
import {createPlayer} from '../../lib/player-ui'

export default {
  name: 'TweenDemo',
  props: ['fn'],
  data: () => ({
    state: {}
  }),
  mounted(){
    this.fn()

    const player = new InTween.Player(tween.duration)

    const sub = player.pipe(tween).subscribe(state => {
      this.state = state
    })

    this.$on('hook:beforeDestroy', () => {
      sub.unsubscribe()
      player.destroy()
    })

    // for more information about creating a "player", see the player tutorial
    createPlayer( this.$refs.player, player )
  }
}
</script>

<style scoped>
.try-it {
  padding: 1.5rem;
  background: #eee;
  border-radius: 5px;
}
</style>
