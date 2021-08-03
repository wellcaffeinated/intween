export class Callable extends Function {
  constructor() {
    super('...args', 'return this._bound.__call__(...args)')
    this._bound = this.bind(this)
    return this._bound
  }

  __call__() { }
}
