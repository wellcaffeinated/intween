import Easing from 'easing-functions'
import util from '@/util'
import Manager from '@/manager'
import Interpolators from '@/interpolators'
import Player from '@/player'
import { Smoothener } from '@/animation/smoothener'
import { registerType } from '@/type'

const Frames = function( schema, meta ){
  return new Manager( schema, meta )
}

Frames.Util = util
Frames.Easing = Easing
Frames.Interpolators = Interpolators
Frames.Player = Player
Frames.registerType = registerType
Frames.Animation = { Smoothener }

export default Frames
