
const source = `return { a: 4-1, c: new Date() }`

console.log(Function(source)())
