import Easing from 'easing-functions'
import util from '@/util'
import Manager from '@/manager'
import Interpolators from '@/interpolators'
import Player from '@/player'
import { Smoothener } from '@/animation/smoothener'
import { registerType } from '@/type'

const Copilot = function( schema, meta ){
  return new Manager( schema, meta )
}

Copilot.Util = util
Copilot.Easing = Easing
Copilot.Interpolators = Interpolators
Copilot.Player = Player
Copilot.registerType = registerType
Copilot.Animation = { Smoothener }

export default Copilot
