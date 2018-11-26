const Pi2 = Math.PI * 2

function shortestAngleDist( a0, a1 ) {
  let da = (a1 - a0) % Pi2

  return (da - Math.PI) % Pi2 + Math.PI
}

const Interpolators = {
  Linear: ( from, to, t ) => from * ( 1 - t ) + to * t
  , Angle: ( from, to, t ) => from + shortestAngleDist(from, to) * t
  , Array: ( from, to, t ) => to.map( (v1, idx) => Interpolators.Linear( from[idx], v1, t ) )
}

export default Interpolators
