import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import babelrc from './.babelrc.json'
import pkg from './package.json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

function header() {
  return {
    renderChunk(code) {
      return `/**
 * InTween ${pkg.version}
 * @license MIT
 * Copyright 2021-present Jasper Palfree
 */
${code}`
    }
  }
}

let builds = [
  {
    input: 'src/index.js',
    plugins: [
      nodeResolve(),
      commonjs(),
      header()
    ],
    output: [
      {
        format: 'esm',
        file: 'dist/intween.module.js'
      }
    ]
  },
  {
    input: 'src/index.js',
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        compact: false,
        babelrc: false,
        ...babelrc
      }),
      header()
    ],
    output: [
      {
        format: 'umd',
        name: 'THREE',
        file: 'dist/intween.js',
      }
    ]
  },
  {
    input: 'src/index.js',
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        babelrc: false,
        ...babelrc
      }),
      terser(),
      header()
    ],
    output: [
      {
        format: 'umd',
        name: 'THREE',
        file: 'dist/intween.min.js'
      }
    ]
  }
]

export default builds
