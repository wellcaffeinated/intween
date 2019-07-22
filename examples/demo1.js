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
    el.style.transform = 'translateZ(-100px) rotateY('+x+'deg) rotateX('+-y+'deg)'
  }

  var manager = Copilot({
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

  manager.add({
    x: 1.2 * Math.PI
  }, {
    id: 'spin'
    , time: '6s'
    , duration: 6000
    , easing: Copilot.Easing.Quadratic.In
  })

  manager.add({
    thing: 0
  }, {
    time: '7s'
    , duration: '100%'
  })

  manager.add({
    y: Math.PI
  }, {
    id: 'up'
    , time: '10s'
    , duration: '100%'
    , easing: Copilot.Easing.Quadratic.InOut
  })

  manager.add({
    thing: 2
  }, {
    time: '10s'
    , duration: '2s'
  })

  manager.add({
    x: 0
  }, {
    id: 'origin'
    , time: '10s'
    , duration: '4s'
    , easing: Copilot.Easing.Quadratic.Out
  })

  // console.log(manager.timeline)

  // manager.loop()

  // console.log('schema', manager._schema)
  // user interaction

  var offsetX = 0
  var offsetY = 0
  var ht = new Hammer.Manager(byId('demo-1-scene'), {})
  ht.add( new Hammer.Press({ time: 0 }) )
  ht.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }) )
  ht
    .on('press', function(e){
      var state = manager.state
      offsetX = state.x
      offsetY = state.y
      manager.meddle( { x: offsetX, y: offsetY }, { freeze: true, transitionDuration: 100 } )
    })
    .on('pan', function(e) {
      var state = {}
      state.x = offsetX + e.deltaX * rad
      state.y = offsetY + e.deltaY * rad
      manager.meddle( state, { freeze: true, transitionDuration: 100 } )
    })
    .on('panend', function(e){
      var state = {}
      state.x = offsetX + e.deltaX * rad
      state.y = offsetY + e.deltaY * rad
      manager.meddle( state, { easing: Copilot.Easing.Elastic.Out, relaxDuration: 2000, relaxDelay: 0, transitionDuration: 100 } )
    })

  let smoother = Copilot.Animation.Smoothener( manager, { duration: 100 } )

  manager.on('update', () => {
    var state = manager.state
    smoother.setState( state )
  })

  let player = Copilot.Player({ totalTime: manager.totalTime })
  player.on('update', ( time ) => {
    manager.seek( time )
  })

  player.on('animate', ( now ) => {
    let state = smoother.update()

    rotate(state.x, state.y)

    // if ( manager.time < 2000 ){
    //   Plotly.extendTraces('graph', {
    //     y: [[state.x]]
    //   }, [0])
    // }
  })

  // Plotly.plot('graph', [{
  //   y: []
  //   , mode: 'lines'
  //   , line: {color: '#80CAF6'}
  // }])

  initControls('demo-1-play', 'demo-1-progress', player)
}

demo1()
