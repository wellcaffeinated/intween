import util from '@/util'

const Pi2 = Math.PI * 2

function shortestModDist( a0, a1, modulo ) {
  let moduloBy2 = 0.5 * modulo
  let da = (a1 - a0) % modulo
  let cycles = ((a1 - a0) / modulo) | 0

  return (da - moduloBy2) % modulo + moduloBy2 + cycles
}

function toCharCodes( str ){
  return str.split('').map( c => c.charCodeAt() )
}

const Interpolators = {
  Linear: ( from, to, t, opts = {} ) => opts.modulo ?
    from + shortestModDist(from, to, opts.modulo) * t :
    from * ( 1 - t ) + to * t
  , Angle: ( from, to, t, opts = {} ) => from + shortestModDist(from, to, Pi2) * t
  , Array: ( from, to, t, opts = {} ) => to.map( (v1, idx) => Interpolators.Linear( from[idx], v1, t ) )
  , Object: ( from, to, t, opts = {} ) =>
    util.mapProperties( from, (val, key) =>
      Interpolators.Linear( val, to[key], t )
    )
  , String: ( from, to, t, opts = {} ) => Interpolators.Array( toCharCodes(from), toCharCodes(to), t ).join('')
  , Step: ( from, to, t, { threshold = 0.5 } = {} ) => (t > threshold) ? to : from
}

export default Interpolators
