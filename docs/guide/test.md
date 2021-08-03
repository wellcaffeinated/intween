# blah

<input type="checkbox" :checked="state.toggle" readonly>
<input type="range" min="0" max="10" :value="state.x" step="0.0001">

<script>
import { createPlayer } from '../lib/player-ui'

const { pipe, map, pipeFromArray } = Copilot

class PlayerObservable extends Copilot.Observable {
  constructor(totalTime){
    super(observer => {
      this.observer = observer
    })
    this.totalTime = totalTime
  }
  seek(time){
    if (!this.observer){ return }
    this.observer.next(time)
  }
  pipe(...fns){
    return pipeFromArray(fns)(this)
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
      x: 0,
      toggle: false
    })
    .to({
      x: 1,
      toggle: true
    }, '3s')
    .to('4s', {
      x: 4
    })

    const $player = new PlayerObservable(tween.duration)

    const subscription = $player.pipe(
      tween
      // Copilot.spreadAssign(
      //   pipe(
      //     Tween(1, 2)
      //     , map(x => ({ x }))
      //   )
      //   , pipe(
      //     Tween(5, 4)
      //     , map(y => ({ y }))
      //   )
      // )
    ).subscribe(state => {
      this.state = state
    }, console.error)

    // for more information about creating a "player", see the player tutorial
    const player = createPlayer( this.$el, $player )
  }
}

</script>
