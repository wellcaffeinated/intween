var byId = document.getElementById.bind(document)

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
      , interpolator: Frames.Interpolators.Angle
    }
    , y: {
      type: 0
      , interpolator: Frames.Interpolators.Angle
    }
  }, {
    defaultTransitionDuration: '3s'
  })

  frames.add({
    x: Math.PI
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
    , duration: '2s'
  })

  console.log('schema', frames._schema)
  // user interaction

  var offsetX = 0
  var offsetY = 0
  var hammertime = new Hammer(byId('demo-1'), {});
  hammertime
    .on('panstart', function(e){
      var state = frames.state
      offsetX = state.x
      offsetY = state.y
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
    var state = frames.state
    rotate(state.x, state.y)
  }

  anim()
}

demo1()
