const stream = require('stream')

class StreamBuffer extends stream.Writable {
  constructor () {
    super()
    this._buffer = ''
  }

  _write (chunk, enc, next) {
    this.buffer += chunk
    next()
  }

  get buffer () {
    return this._buffer
  }

  set buffer (val) {
    this._buffer = val
  }
}
