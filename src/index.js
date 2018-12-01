import Easing from 'easing-functions'
import Manager from '@/manager'
import Interpolators from '@/interpolators'
import { registerType } from '@/type'

const Frames = function( schema, meta ){
  return new Manager( schema, meta )
}

Frames.Easing = Easing
Frames.Interpolators = Interpolators
Frames.registerType = registerType

export default Frames
