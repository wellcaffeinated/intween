export default class {
  constructor( schema, meta ){
    this._state = { ...schema }
  }

  get state(){
    return this._state
  }
}
