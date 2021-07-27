import * as Easing from '@/easing'
import * as util from '@/util'
import Manager from '@/manager'
import * as Interpolators from '@/interpolators'
import Player from '@/player'
import Syncher from '@/syncher'
import Parsers from '@/parsers'
import { getTimeFraction, interpolateProperty } from '@/transition'
import { Smoothener } from '@/animation/smoothener'
import { registerType } from '@/type'
import * as ENUM from '@/enum'

const Copilot = function( schema, meta ){
  return new Manager( schema, meta )
}

Copilot.Util = util
Copilot.Easing = Easing
Copilot.Interpolators = Interpolators
Copilot.Player = Player
Copilot.Syncher = Syncher
Copilot.Parsers = Parsers
Copilot.registerType = registerType
Copilot.Animation = { Smoothener, getTimeFraction, interpolateProperty }
Object.assign(Copilot, ENUM)

export default Copilot
