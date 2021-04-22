(async function fetchAndInstantiate() {
  const response = await fetch('../out/main.wasm')
  const buffer = await response.arrayBuffer()
  const obj = await WebAssembly.instantiate(buffer)
  const output = new Uint8Array(obj.instance.exports.memory.buffer)

  const pointer = obj.instance.exports.helloWorld()

  let string = ""

  for(let i = pointer; output[i]; i++) {
    string += String.fromCharCode(output[i])
  }  

  document.getElementById('container').textContent = string
})()