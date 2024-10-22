export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') throw new TypeError('Name must be a string');
    if (typeof (length) !== 'number') throw new TypeError('Length must be a number');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof (x) !== 'string') throw new TypeError('Name must be a string');
    this._name = x;
  }

  get length() {
    return this._length;
  }

  set length(x) {
    if (typeof (x) !== 'number') throw new TypeError('Length must be a number');
    this._length = x;
  }

  get students() {
    return this._students;
  }

  set students(x) {
    this._students = x;
  }
}
