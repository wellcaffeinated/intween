var byId = document.getElementById.bind(document)

function initControls( btnId, progressId, frames ){
  var btn = byId(btnId)
  var progress = byId(progressId)

  frames.on('seek', e => {
    progress.style.width = frames.progress + '%'
  })

  var prevPauseState
  var scrubber = new Hammer.Manager(progress.parentNode, {})
  scrubber.add( new Hammer.Press({ time: 0 }) )
  scrubber.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }) )
  scrubber.on('panstart', () => {
      prevPauseState = frames.paused
    }).on('press pan', (e) => {
      frames.paused = true
      let pos = (e.center.x - progress.parentNode.offsetLeft) / progress.parentNode.offsetWidth

      frames.seek( pos * frames.totalTime )
    })
    .on('pressup panend', e => {
      frames.paused = prevPauseState
    })

  btn.addEventListener('change', e => {
    frames.paused = !frames.paused
    btn.checked = frames.paused ? 'checked' : ''
  })
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
    , time: '8s'
    , duration: 6000
  })

  frames.add({
    y: Math.PI
  }, {
    id: 'up'
    , time: '10s'
    , duration: '4s'
  })

  frames.add({
    x: 0
  }, {
    id: 'origin'
    , time: '10s'
    , duration: '2s'
  })

  console.log(frames.timeline)

  // frames.loop()

  console.log('schema', frames._schema)
  // user interaction

  var offsetX = 0
  var offsetY = 0
  var hammertime = new Hammer(byId('demo-1-scene'), {});
  hammertime
    .on('press', function(e){
      var state = frames.state
      offsetX = state.x
      offsetY = state.y
      frames.meddle( { x: offsetX, y: offsetY } )
    })
    .on('pan', function(e) {
      var state = {}
      state.x = offsetX + e.deltaX * rad
      state.y = offsetY + e.deltaY * rad
      frames.meddle( state )
    })

  function anim( time ){
    window.requestAnimationFrame(anim)
    frames.step()
  }

  frames.on('seek', e => {
    var state = frames.state
    rotate(state.x, state.y)
  })

  initControls('demo-1-play', 'demo-1-progress', frames)

  // console.log(frames.getTransitions( 9000 ))
  anim()
}

demo1()
