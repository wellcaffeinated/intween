# blah

<input type="checkbox" :checked="state.toggle" readonly>
<input type="range" min="0" max="10" :value="state.range" step="0.0001" @input="updateRange">

<div :style="ballStyles"></div>

<script>
import { fromEvent, Observable, from, pipe } from 'rxjs'
import { tap, map, mergeWith } from 'rxjs/operators'
import { createPlayer } from '../lib/player-ui'

// const { pipe, pipeFromArray, map, from, Observable } = InTween

export default {
  name: 'Test',
  data: () => ({
    state: {}
  }),
  mounted(){
    const tween = new InTween.Tween({
      x: 300,
      y: 300,
      range: 0,
      toggle: false
    })
    .by('3s', {
      x: 500,
      range: 1,
      toggle: true
    }, 'quadInOut')
    .to({
      x: 300,
      range: 4
    }, { easing: InTween.Easing.makeElasticOut(0.7, 0.5) })

    const meddle = this.meddle = new InTween.Meddle(tween, { easing: 'quadInOut' })

    const player = new InTween.Player(tween.duration)

    const subscription = player.pipe(
      InTween.spreadAssign(
        tween
        , pipe(
          meddle
          // , tap(console.log)
        )
      )
    ).subscribe(state => {
      this.state = state
    }, console.error)

    const sub = fromEvent(window, 'click').pipe(
      map(e => ({ x: e.pageX, y: e.pageY }))
      , InTween.Smoothen({
        duration: 1000,
        // easing: 'quadIn + backOut',
        easing: InTween.pipe(InTween.Easing.quadIn, InTween.Easing.bounceOut)
      }, () => this.state)
    ).subscribe((state) => {
      // console.log(state)
      meddle.set(state)
    })

    this.$on('hook:beforeDestroy', () => {
      sub.unsubscribe()
      subscription.unsubscribe()
      player.destroy()
    })

    // for more information about creating a "player", see the player tutorial
    createPlayer( this.$el, player )
  }
  , computed: {
    ballStyles(){
      const { x, y } = this.state
      return {
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'tomato',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        zIndex: 100,
        transform: `translate(${x}px, ${y}px)`
      }
    }
  }
  , methods: {
    updateRange(e){
      this.meddle.set({ range: e.target.value })
    }
  }
}

</script>
