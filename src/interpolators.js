const Interpolators = {
  Linear: ( from, to, t ) => from * ( 1 - t ) + to * t
  , Array: ( from, to, t ) => to.map( (v1, idx) => Interpolators.Linear( from[idx], v1, t ) )
}

export default Interpolators
