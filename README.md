# InTween

[![NPM Package][npm]][npm-url]
[![MIT License][mit]][mit-url]

Your companion for building rich interactive media with **Interactive Tweens**.

[Guide](https://intween.wellcaffeinated.net/guide) &mdash;
[Demos](https://intween.wellcaffeinated.net/demos/) &mdash;
[API Docs](https://intween.wellcaffeinated.net/api/)

### Quick Start ###

```sh
yarn add intween
# -- or --
npm install -s intween
```

```js
import { Tween, Meddle, Player, spreadAssign, animationThrottle } from 'intween'
```

Or use a CDN

```html
<script src="https://unpkg.com/intween/dist/intween.min.js"></script>
<script>
const { Tween, Meddle, Player, spreadAssign, animationThrottle } = InTween // window.InTween
</script>
```

Now play!

```js
const tween = new Tween({
  position: [0, 0]
})

tween.to({
  position: [1, 1]
}, {
  startTime: '1s',
  endTime: '2s',
  easing: 'quadInOut'
})

const meddle = new Meddle(tween).easing('backIn')

// connect it to some interaction event
window.addEventListener('click', e => {
  const position = [e.clientX, e.clientY]
  meddle.set({ position })
})

const player = new Player(tween.duration)

player.pipe(
  spreadAssign(
    tween,
    meddle
  )
  , animationThrottle()
).subscribe(state => {
  // do stuff with state.position
})

player.play() // go!
```

[mit]: https://img.shields.io/apm/l/atomic-design-ui.svg?
[mit-url]: https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs
[npm]: https://img.shields.io/npm/v/intween
[npm-url]: https://www.npmjs.com/package/intween
