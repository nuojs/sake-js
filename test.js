
let SakeJS = require('./src')
let text = `
function main(t){
    console.log(t)
}
main("hello world!!") 
`
let res = SakeJS.obfuscate(text)

let rdm = SakeJS.obfuscate(text, {random: true})

let custom = SakeJS.obfuscate(text, {custom: '〆〇〡〢〣〤ㄍㄑ〳ヽ〴丿乀乁乂〸ㆺ〻ミ'})

console.log(res,'\n', rdm,'\n', custom)