import { Player, Tween } from 'intween'

const slideTransitionTime = 1000
const slideEasing = 'backIn + quadOut'
const container = document.querySelector('.slideshow-example')
const track = document.querySelector('.slideshow-example .track')
const slides = document.querySelectorAll('.slideshow-example .slide')

const tween = new Tween({
  slidePos: 0
}, { easing: slideEasing })

for (let i = 1; i < slides.length; i++){
  tween.in(slideTransitionTime, {
    slidePos: i
  })
}

tween.in(slideTransitionTime, {
  slidePos: 0
})

const player = new Player(tween.duration).loop()

container.addEventListener('click', () => {
  const slide = Math.floor(player.time / slideTransitionTime)
  const t = (slide + 1) * slideTransitionTime
  player.playTo(t)
})

player.pipe(tween).subscribe(state => {
  const pct = -state.slidePos * 100
  track.style.transform = `translate(${pct}%, 0)`
})
