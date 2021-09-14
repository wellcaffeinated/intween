# spreadAssign()

```js
spreadAssign(...operators) // -> Operator
```

Get an operator that will take a source observable and feed it into
each of the specified operators. Then combine their outputs using
[`combineLatest()`](/api/combine-latest). The output of each
will be assigned to a new object in order.

This is very useful for taking a `Tween` and a `Meddle` (or many)
and combining them into a single output state.

**Examples**

```js
import { of } from 'rxjs'

const input = of(0, 1000, 2000, 3000)
const tween = new Tween({ x: 0 }).in('3s', { x: 3 })
const tween2 = new Tween({ y: 3 }).in('3s', { y: 6 })

input.pipe(
  spreadAssign(
    tween,
    tween2
  )
).subscribe(output => console.log(output))
// -> { x: 0, y: 3 }
// -> { x: 1, y: 3 }
// -> { x: 1, y: 4 }
// -> { x: 2, y: 4 }
// -> { x: 2, y: 5 }
// -> { x: 3, y: 5 }
// -> { x: 3, y: 6 }
```
