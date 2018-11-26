import Easing from 'easing-functions'
import Manager from '@/manager'
import Interpolators from '@/interpolators'

const Frames = function( schema, meta ){
  return new Manager( schema, meta )
}

Frames.Easing = Easing
Frames.Interpolators = Interpolators

export default Frames
