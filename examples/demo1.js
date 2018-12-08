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

  var frames = Frames({
    x: {
      type: 0
      // , interpolator: Frames.Interpolators.Angle
    }
    , y: {
      type: 0
      // , interpolator: Frames.Interpolators.Angle
    }
  }, {
    defaultTransitionDuration: '3s'
  })

  frames.add({
    x: 1.2 * Math.PI
  }, {
    id: 'spin'
    , time: '6s'
    , duration: 6000
    , easing: Frames.Easing.Quadratic.In
  })

  frames.add({
    y: Math.PI
  }, {
    id: 'up'
    , time: '10s'
    , duration: '4s'
    , easing: Frames.Easing.Quadratic.InOut
  })

  frames.add({
    x: 0
  }, {
    id: 'origin'
    , time: '10s'
    , duration: '4s'
    , easing: Frames.Easing.Quadratic.Out
  })

  // console.log(frames.timeline)

  // frames.loop()

  // console.log('schema', frames._schema)
  // user interaction

  var offsetX = 0
  var offsetY = 0
  var ht = new Hammer.Manager(byId('demo-1-scene'), {})
  ht.add( new Hammer.Press({ time: 0 }) )
  ht.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }) )
  ht
    .on('press', function(e){
      var state = frames.state
      offsetX = state.x
      offsetY = state.y
      frames.meddle( { x: offsetX, y: offsetY }, { freeze: true, transitionDuration: 100 } )
    })
    .on('pan', function(e) {
      var state = {}
      state.x = offsetX + e.deltaX * rad
      state.y = offsetY + e.deltaY * rad
      frames.meddle( state, { freeze: true, transitionDuration: 100 } )
    })
    .on('panend', function(e){
      var state = {}
      state.x = offsetX + e.deltaX * rad
      state.y = offsetY + e.deltaY * rad
      frames.meddle( state, { easing: Frames.Easing.Elastic.Out, relaxDuration: 2000, relaxDelay: 0, transitionDuration: 100 } )
    })

  let smoother = Frames.Animation.Smoothener( frames, { duration: 100 } )

  frames.on('update', () => {
    var state = frames.state
    smoother.setState( state )
  })

  let player = Frames.Player({ totalTime: frames.totalTime })
  player.on('update', ( time ) => {
    frames.seek( time )
  })

  player.on('animate', ( now ) => {
    let state = smoother.update()

    rotate(state.x, state.y)

    // if ( frames.time < 2000 ){
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
