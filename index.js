let {caratersUsed, globalVars, needCaracters, replacer, buildTemplate, build255character, addOns, removeGlobalVars} = require('./utils')

function obfuscate(text, options){
   text = removeGlobalVars(text)
   let used = caratersUsed(text)
   let needMoreCaracters = needCaracters(used, globalVars)
   let fn = replacer(
      [...addOns,...globalVars, ...needMoreCaracters], 
      build255character(options)
      )
   let result = buildTemplate(fn, text, needMoreCaracters)
   return result
}

module.exports = { obfuscate }