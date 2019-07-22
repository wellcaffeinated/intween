# Built-in Interpolators

<pre><code id="results"></code></pre>

Angle: <span id="angle">&#8594;</span>

::: tip
Angles will always move the shortest distance, which
in the above case, is the opposite direction
:::

<style>
#angle {
  display: inline-block;
  font-size: 32px;
}
</style>

<div id="player-wrap"></div>

<ClientOnly>
  <demo/>
</ClientOnly>

<script>
export default {
  name: 'demo',
  beforeMount(){
    import('./all-interpolators.js')
  }
}
</script>

#### Code

<<< @/docs/demos/all-interpolators.js
