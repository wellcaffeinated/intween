# blah

<input type="checkbox" :checked="state.toggle" readonly>
<input type="range" min="0" max="10" :value="state.range" step="0.0001" @input="updateRange">

<div :style="ballStyles"></div>

<script>
// import { fromEvent, Observable, from } from 'rxjs'
// import { tap, map, mergeWith } from 'rxjs/operators'
import { createPlayer } from '../lib/player-ui'

const { pipe, pipeFromArray, map, from, Observable } = Copilot

const fromEvent = (el, event) => new Observable(sink => {
  const cb = e => sink.next(e)
  el.addEventListener(event, cb)
  return {
    unsubscribe: () => {
      el.removeEventListener(event, cb)
    }
  }
})

class PlayerObservable extends Copilot.Observable {
  constructor(totalTime){
    super(observer => {
      this.observer = observer
      observer.next(0)
    })
    this.totalTime = totalTime
  }
  seek(time){
    if (!this.observer){ return }
    this.observer.next(time)
  }
}

class TweenOperator extends Copilot.Util.Callable {
  constructor(s, e) {
    super()
    this.s = s
    this.e = e
  }

  at(t){
    return Copilot.Util.lerp(this.s, this.e, t)
  }

  __call__(source){
    return map(t => this.at(t))(source)
  }
}

function Tween(s, e){
  return new TweenOperator(s, e)
}

export default {
  name: 'Test',
  data: () => ({
    state: {}
  }),
  mounted(){
    const tween = Copilot.Tween({
      x: 300,
      y: 300,
      range: 0,
      toggle: false
    })
    .to({
      x: 500,
      range: 1,
      toggle: true
    }, '3s')
    .to('4s', {
      x: 300,
      range: 4
    })

    const meddle = this.meddle = Copilot.Meddle(tween)

    const $player = Copilot.Player(tween.duration)
    console.log($player.lift)

    const subscription = $player.pipe(
      Copilot.spreadAssign(
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
      , Copilot.Smoothen({
        duration: 1000,
        easing: Copilot.Easing.quadInOut
      }, this.state, () => this.state)
    ).subscribe((state) => {
      // console.log(state)
      meddle.set(state)
    })

    this.$on('hook:beforeDestroy', () => {
      sub.unsubscribe()
    })

    // for more information about creating a "player", see the player tutorial
    const player = createPlayer( this.$el, $player )
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
