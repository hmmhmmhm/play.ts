const ts = require('typescript')
const fs = require('fs')
let code = fs.readFileSync('./index.ts')

var result = ts.transpile(String(code))
eval(result)