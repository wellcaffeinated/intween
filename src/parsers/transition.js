import { timeParser } from '@/parsers/time'

export function transitionParser( val ){
  if ( !Array.isArray(val) ){
    let transition = {}

    transition.back =
    transition.forward = timeParser( val )
    return transition
  }

  return {
    forward: timeParser(val[0])
    , back: timeParser(val[1])
  }
}
