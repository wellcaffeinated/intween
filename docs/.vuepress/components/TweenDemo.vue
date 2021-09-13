<template>
<div class="try-it" v-html="html"></div>
</template>

<script>
export default {
  name: 'TweenDemo',
  props: ['name'],
  data: () => ({
    html: ''
  }),
  async mounted(){
    const htmlContent = await import(`raw-loader!../../demos/${this.name}/${this.name}.html`).then(m => m.default, e => {})
    const css = await import(`../../demos/${this.name}/${this.name}.css`).then(m => m.default, e => {})

    this.html = htmlContent

    this.$nextTick(() => {
      import(`../../demos/${this.name}/${this.name}.js`)
    })
    // createPlayer( this.$refs.player, player )
  }
}
</script>

<style scoped>
.try-it {
  padding: 1.5rem;
  background: #eee;
  border-radius: 5px;
  margin-bottom: 1em;
}
</style>
