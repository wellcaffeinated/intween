import { regulatedBy } from './regulated-by.js'
import { animationFrames } from './animation-frames.js'

export const animationThrottle = () => source => {
  return regulatedBy(animationFrames(), true)(source)
}
