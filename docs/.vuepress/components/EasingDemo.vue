<template>
<div class="wrapper">
  <button class="button" @click="run">play</button>
  <select v-if="!easing" v-model="selected">
    <option v-for="e in easings" :key="e" :value="e">easing: {{ e }}</option>
  </select>
  <div ref="target" class="ball"></div>
</div>
</template>

<script>
import { Easing, Tween, Player } from 'intween'

export default {
  name: 'EasingDemo',
  props: ['easing'],
  data: () => ({
    selected: 'linear',
    easings: Object.keys(Easing).filter(k => k.substring(0, 4) !== 'make')
  }),
  beforeCreate() {
    this.player = new Player('2s')
  },
  watch: {
    easing: {
      handler(){
        if (this.easing){
          this.selected = this.easing
        }
      },
      immediate: true
    },
    animation(anim, old){
      if (old){
        old.unsubscribe()
      }

      this.player.seek(0)
    }
  },
  computed: {
    tween(){
      return [new Tween({ x: 0 }).in('2s', { x: 100 }, this.selected)]
    },
    animation(){
      return this.player.pipe(this.tween[0]).subscribe(state => {
        const target = this.$refs.target
        if (!target){ return }
        target.style.transform = `translate(${state.x}%, 0)`
      })
    }
  },
  methods: {
    run(){
      this.player.seek(0)
      this.player.play()
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100px;
  background: #282c34;
  border-radius: 5px;
  padding: 3px;
  position: relative;
  overflow: hidden;
}

.ball {
  position: absolute;
  top: 50%;
  left: 50px;
  right: 100px;
  transform: translateZ(0);
}

.ball::after {
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  margin-top: -10px;
  background: tomato;
  border-radius: 50%;
}
</style>
