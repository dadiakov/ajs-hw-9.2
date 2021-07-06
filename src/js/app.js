export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
    this.bufferView = new Uint16Array(this.buffer);
  }

  toString() {
    let string = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      string += String.fromCharCode(this.bufferView[i]);
    }
    return string;
  }
}
