---
sidebar: auto
---
# Guide

* [test](./test)

import library before rxjs

```
tween = new Tween({ x: 0 }, { tweenDuration: '1s' })
tween.to({ x: 1 }) // to x = 1 at 1s
tween.to({ x: 2 }) // to x = 2 at 2s

tween.by('3s', { x: 3 }) // to x = 3 at 3s
tween.in('2s', { x: 5 }) // to x = 5 at 5s
tween.to({ x: 7 }, { start: '6s', end: '7s' }) // to x = 7 at 7s (start at 6s)
tween.by('10s', '50%', { x: 10 }) // to x = 10 at 10s (start at 8.5s)
tween.in('2s', '50%', { x: 12 }) // to x = 12 at 12s (start at 11s)
```
