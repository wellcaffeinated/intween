// build.mjs
import esbuild from 'esbuild';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);

const banner = `/**
 * InTween ${pkg.version}
 * @license MIT
 * Copyright 2021-present Jasper Palfree
 */`;

await Promise.all([
  // ESM
  esbuild.build({
    entryPoints: ['src/index.js']
    , outfile: 'dist/intween.mjs'
    , format: 'esm'
    , target: 'es2017'
    , bundle: true
    , sourcemap: true
  })

  // CJS
  , esbuild.build({
    entryPoints: ['src/index.js']
    , outfile: 'dist/intween.cjs'
    , format: 'cjs'
    , target: 'es2017'
    , bundle: true
    , sourcemap: true
  })

  // Browser (IIFE)
  , esbuild.build({
    entryPoints: ['src/index.js']
    , outfile: 'dist/intween.browser.js'
    , format: 'iife'
    , target: 'es5'
    , globalName: 'InTween'
    , bundle: true
    , minify: true
    , sourcemap: true
    , banner: { js: banner }
  })
]);
