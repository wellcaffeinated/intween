import Easing from 'easing-functions'
import util from '@/util'
import Manager from '@/manager'
import Interpolators from '@/interpolators'
import { Smoothener } from '@/animation/smoothener'
import { registerType } from '@/type'

const Frames = function( schema, meta ){
  return new Manager( schema, meta )
}

Frames.Util = util
Frames.Easing = Easing
Frames.Interpolators = Interpolators
Frames.registerType = registerType
Frames.Animation = { Smoothener }

export default Frames
