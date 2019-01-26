import Easing from 'easing-functions'
import util from '@/util'
import Manager from '@/manager'
import Interpolators from '@/interpolators'
import Player from '@/player'
import Syncher from '@/syncher'
import { getTimeFraction, interpolateProperty } from '@/transition'
import { Smoothener } from '@/animation/smoothener'
import { registerType } from '@/type'

const Copilot = function( schema, meta ){
  return new Manager( schema, meta )
}

Copilot.Util = util
Copilot.Easing = Easing
Copilot.Interpolators = Interpolators
Copilot.Player = Player
Copilot.Syncher = Syncher
Copilot.registerType = registerType
Copilot.Animation = { Smoothener, getTimeFraction, interpolateProperty }

export default Copilot
