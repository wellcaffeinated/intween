<template>
<canvas ref="canvas" :width="width" :height="height"></canvas>
</template>

<script>
import { Parsers, Util } from 'intween'

function drawLines(
  ctx,
  points,
  color = 'grey',
  lineWidth = 2,
  closed = false
) {
  if (color !== ctx.strokeStyle) {
    ctx.strokeStyle = color
  }
  ctx.lineWidth = lineWidth
  ctx.beginPath()
  ctx.moveTo(points[0].x, points[0].y)
  for (let i = 0, l = points.length; i < l; i++) {
    let p = points[i]
    ctx.lineTo(p.x, p.y)
  }
  if (closed) {
    ctx.closePath()
  }
  ctx.stroke()
}

function drawCircle(ctx, { x, y }, r, color) {
  if (color !== ctx.fillStyle) {
    ctx.fillStyle = color
  }
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fill()
}

const markerSize = 5

export default {
  name: 'EasingPlot',
  props: {
    easing: [String, Function],
    width: {
      type: Number,
      default: 16 * 20
    },
    height: {
      type: Number,
      default: 9 * 20
    }
  },
  mounted(){
    this.draw()
  },
  computed: {
    easingFn(){
      return Parsers.parseEasing(this.easing)
    },
    domain(){
      return [markerSize, this.width - markerSize]
    },
    range(){
      return [this.height - markerSize, markerSize]
    },
    points(){
      const domainSize = this.domain[1] - this.domain[0]
      let points = Array.from({ length: domainSize + 1 }).map((_, x) => {
        return this.easingFn(x / domainSize)
      })
      const min = points.reduce((m, y) => Math.min(m, y), 0)
      points = points.map(y => y - min)
      const max = points.reduce((m, y) => Math.max(m, y), 1)
      points = points.map(y => y / max)
      return points.map((y, x) => ({
        x: Util.lerp(this.domain[0], this.domain[1], x / domainSize),
        y: Util.lerp(this.range[0], this.range[1], y)
      }))
    }
  },
  watch: {
    points: 'draw'
  },
  methods: {
    draw(){
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')

      ctx.fillStyle = '#282c34'
      ctx.fillRect(0, 0, this.width, this.height)
      drawLines(ctx, this.points, '#af6a3e')

      drawCircle(ctx, this.points[0], 5, 'forestgreen')
      drawCircle(ctx, this.points[this.points.length - 1], 5, 'steelblue')
    }
  }
}
</script>

<style scoped>
</style>
