import Manager from './manager'
import Easing from 'easing-functions'

const Frames = function( schema, meta ){
  return new Manager( schema, meta )
}

Frames.Easing = Easing

export default Frames
