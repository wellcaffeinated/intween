import { identity } from '@/util'

export function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

export function pipe(...ops) {
  return pipeFromArray(ops)
}
