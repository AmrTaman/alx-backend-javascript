export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('size must be a numnber');
    if (typeof location !== 'string') throw new TypeError('location must be a string');
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](cls) {
    if (cls === 'string') return this._location;
    if (cls === 'number') return this._size;
    return undefined;
  }
}
