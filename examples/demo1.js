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
  const rad = Math.PI / 180

  function rotate(x, y){
    x /= rad
    y /= rad
    el.style.transform = `translateZ(-100px) rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const tween = Copilot.Tween({
    x: {
      type: 0
      // , interpolator: Copilot.Interpolators.Angle
    }
    , y: {
      type: 0
      // , interpolator: Copilot.Interpolators.Angle
    }
  }, {
    defaultTransitionDuration: '3s'
  })

  tween.to('6s', {
    x: 1.2 * Math.PI
  }, 6000)

  tween.to({
    thing: 0
  }, {
    time: '7s'
    , duration: '100%'
  })

  tween.to('10s', {
    y: Math.PI
  })

  tween.to('10s', {
    thing: 2
  }, '2s')

  tween.to('10s', {
    x: 0
  }, '4s')

  // console.log(manager.timeline)

  // manager.loop()

  // console.log('schema', manager._schema)
  // user interaction

  let lastState = {}
  const meddle = Copilot.Meddle(tween, {
    easing: Copilot.Easing.elasticOut
    , relaxDuration: 2000
    , relaxDelay: 0
  })

  var offsetX = 0
  var offsetY = 0
  var ht = new Hammer.Manager(byId('demo-1-scene'), {})
  ht.add( new Hammer.Press({ time: 0 }) )
  ht.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }) )
  ht
    .on('press', function(e){
      offsetX = lastState.x
      offsetY = lastState.y
      meddle.set(lastState).freeze()
    })
    .on('pan', function(e) {
      var state = {}
      state.x = offsetX + e.deltaX * rad
      state.y = offsetY + e.deltaY * rad
      meddle.set(state).freeze()
    })
    .on('panend', function(e){
      var state = {}
      state.x = offsetX + e.deltaX * rad
      state.y = offsetY + e.deltaY * rad
      meddle.set( state ).freeze(false)
    })

  const player = Copilot.Player(tween.duration)
  player.pipe(
    Copilot.spreadAssign(
      tween,
      rxjs.pipe(
        meddle,
        // rxjs.tap(console.log)
      )
    )
  ).subscribe(state => {
    lastState = state
    rotate(state.x, state.y)
  })

  initControls('demo-1-play', 'demo-1-progress', player)
}

demo1()
