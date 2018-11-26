var byId = document.getElementById.bind(document)

function demo1(){
  var el = byId('demo-1-cube')

  function rotate(x, y){
    el.style.transform = 'translateZ(-100px) rotateY('+x+'deg) rotateX('+-y+'deg)'
  }

  var frames = Frames({
    x: 0
    , y: 0
  }, {
    transition: '1s'
  })

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
      var state = frames.state
      state.x = offsetX + e.deltaX
      state.y = offsetY + e.deltaY
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
