# registerType()

```js
registerType(cfg)
```

Register a custom type for use in a schema.

**Params**

* `{Object} cfg`
  * `{String} cfg.type` - The type name
  * `{Function} cfg.interpolator` - The interpolator to use
  * `{any} cfg.default` - The default value for this type

**Examples**

```js
registerType({
  type: 'Vector3'
  , default: new THREE.Vector3()
  , interpolator: (from, to, k) => {
    return from.clone().lerp( to, k )
  }
})

const tween = new Tween({
  cubePos: { type: 'Vector3' }
  , spherePos: new THREE.Vector3(1, 1, 1)
})
.by('1s', { cubePos: new THREE.Vector3(1, 2, 3) })
```
