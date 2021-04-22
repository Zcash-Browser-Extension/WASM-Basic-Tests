(async function fetchAndInstantiate() {
  const response = await fetch('../out/main.wasm');
  const buffer = await response.arrayBuffer();
  const obj = await WebAssembly.instantiate(buffer);
  console.log("Hello")
  console.log(obj.instance.exports.helloWorld());
})()

/*
(async () => {
  const codePromise = fetch('../out/main.wasm')
  const { instance } = await WebAssembly.instantiate(codePromise)
  
  const buffer = new Uint8Array(instance.exports.memory.buffer)

  const pointer = instance.exports.helloWorld()

  let string = ""

  for(let i = pointer; buffer[i]; i++) {
    string += String.fromCharCode(buffer[i])
  }

  document.getElementById('container').textContent = string
})()
*/