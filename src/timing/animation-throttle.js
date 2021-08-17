import { regulatedBy } from './regulated-by'
import { animationFrames } from './animation-frames'

export const animationThrottle = () => source => {
  return regulatedBy(animationFrames(), true)(source)
}
