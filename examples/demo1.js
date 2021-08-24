var byId = document.getElementById.bind(document)

function initControls( btnId, progressId, player ){
  var btn = byId(btnId)
  var progress = byId(progressId)

  player.on('update', e => {
    progress.style.width = player.progress + '%'
  })

  player.on('togglePause', () => {
    btn.checked = player.paused ? 'checked' : ''
  })

  var prevPauseState
  var scrubber = new Hammer.Manager(progress.parentNode, {})
  scrubber.add( new Hammer.Press({ time: 0 }) )
  scrubber.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }) )
  scrubber.on('press', () => {
      prevPauseState = player.paused
      player.togglePause( true )
    }).on('press pan', (e) => {
      let pos = (e.center.x - progress.parentNode.offsetLeft) / progress.parentNode.offsetWidth
      player.seek( pos * player.totalTime )
    })
    .on('pressup panend', e => {
      player.togglePause( prevPauseState )
    })

  btn.addEventListener('change', e => {
    player.togglePause()
  })

  btn.checked = player.paused ? 'checked' : ''
}

function demo1(){
  var el = byId('demo-1-cube')

  function rotate(x, y){
    el.style.transform = `translateZ(-100px) rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const tween = new InTween.Tween({
    x: {
      type: 0
      , interpolator: 'degrees'
    }
    , y: {
      type: 0
      , interpolator: 'degrees'
    }
  }, {
    tweenDuration: '3s'
  })

  tween.by('6s', '100%', {
    x: 1.2 * 180
  }, 'quadInOut')

  tween.by('7s', 0, { x: 123 })

  tween.to({
    x: 0
  }, {
    endTime: '8s'
    , duration: '50%'
  })

  tween.in('1s', '0%', {
    x: 50
  })

  tween.by('9s', '0%', {
    y: 30
  })

  tween.by('13s', {
    y: 180
  }, 'quintOut')

  tween.in('1s', '2s', {
    x: 540
  }, 'backInOut')

  let lastState = {}
  const meddle = new InTween.Meddle(tween, {
    easing: 'backInOut'
    , relaxDuration: 2000
    , relaxDelay: 0
  })

  let offsetX = 0
  let offsetY = 0

  const interaction = new InTween.Subject()
  interaction
    .pipe(
      rxjs.throttleTime(100)
      , InTween.Smoothen(() => lastState)
    )
    .subscribe(state => meddle.set(state))

  const ht = new Hammer.Manager(byId('demo-1-scene'), {})
  ht.add( new Hammer.Press({ time: 0 }) )
  ht.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }) )
  ht
    .on('press', function(e){
      offsetX = lastState.x
      offsetY = lastState.y
      interaction.next(lastState)
      meddle.freeze()
    })
    .on('pan', function(e) {
      var state = {}
      state.x = offsetX + e.deltaX
      state.y = offsetY + e.deltaY
      interaction.next(state)
      meddle.freeze()
    })
    .on('panend pressup', function(e){
      var state = {}
      state.x = offsetX + e.deltaX
      state.y = offsetY + e.deltaY
      interaction.next(state)
      meddle.freeze(false)
    })

  const player = new InTween.Player(tween.duration)
  player.pipe(
    source => player.fromEvent('togglePause').pipe(
      rxjs.map(v =>
        v ?
          source :
          rxjs.pipe(
            rxjs.throttleTime(100, { leading: true, trailing: true })
            , InTween.animationSync()
          )(source)
      )
      , rxjs.switchAll()
    )
    , InTween.spreadAssign(
      tween,
      rxjs.pipe(
        meddle
      )
    )
    , InTween.animationThrottle()
  ).subscribe(state => {
    lastState = state
    rotate(state.x, state.y)
  })

  initControls('demo-1-play', 'demo-1-progress', player)
}

demo1()
