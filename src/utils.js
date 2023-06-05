let obj = {};
[...Array(66666).keys()].forEach((e, key) => {
  if (key < 255) return;
  let val = String.fromCharCode(e);
  if (val == "$" || val == "_") return;
  try {
    eval("var " + val + "=1");
    obj[val] = {};
  } catch (e) {}
});
let words = Object.keys(obj).join('')
let globalVars = [
  '0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '.', '[', 'o', 'b', 'j', 'e',
  'c', 't', ' ', 'O', ']', 'r', 'u', 'f',
  'a', 'l', 's', 'n', 'd', 'i', 'S', 'g',
  '{', '}', '(', ')', '%', 'E', 'y',
  'p', 'm', 'k', '/', 'C', 'v', 'h',
]
let addOns = ['constructor', 'blank_function', 'toString_36',
    'toString', '_eval', 'blank_array', 'fromCharCode', 'empty'
  ]
function Arr(t, req){
 return [...req].map(e => t(e))
}
function buildTemplate(r, code, moreChr){
  let t = [,...Arr(r,'ruefals'),,,r('n'),r('d'),,,r('i')]
  let u = [...Arr(r,'.[obj'), , r('c'), r('t'), r(' '), r('O'), , , , r('constructor'), , r(']')]
  let ts = Arr(r,'toString').join('+')
  let c = r('c')
  let fill = Arr(r,'fill').join('+')
  let p = Arr(r, 'phmky')
  let more = Arr(r, moreChr.join(''))
  let _more = moreChr.map(e => {
      return r('fromCharCode')+'(+['+Arr(r,e.charCodeAt(0).toString()).join('+')+'])'
  })
  let _1 = [r('0'),,r('1'),,r('2'),,r('3'),,r('4'),,r('5'),,r('6'),,r('7'),,r('8'),,r('9')]
  return `
   (function(){
   [${u}]="."+{};
   ${r('blank_array')}=[];
   [${t}]=[!!${c}] + !${c} + ${c}.${c};
   [,,,,,,,,,${r('S')},,,,,${r('g')}] = ${r('.')}[${r('constructor')} += ${Arr(r,'onstructor').join('+')}]+${r('blank_array')};
   [,,,,,,,,${r('empty')},,,,,${Arr(r,'()')},,${r('{')},,,,,,,${r('v')},,,,,,,,,${r('}')}]=
   [][${fill}]+${r('blank_array')};
   ${r('toString')}=[${ts}];
   [${_1}]=[+${r('empty')},++${r('empty')},++${r('empty')},++${r('empty')},++${r('empty')},++${r('empty')},++${r('empty')},++${r('empty')},++${r('empty')},++${r('empty')}]+${r('blank_array')};
   ${r('blank_function')}=${r('blank_array')}[${r('constructor')}][${r('constructor')}];
   ${r('toString_36')}=${r('blank_function')}(${r('e')},${Arr(r, 'return e.toString(36)').join('+')});
   [${p}]=[${r('toString_36')}(+[${r('2')}+${r('5')}]),${r('toString_36')}(+[${r('1')}+${r('7')}]),${r('toString_36')}(+[${r('2')}+${r('2')}]),${r('toString_36')}(+[${r('2')}+${r('0')}]),${r('toString_36')}(+[${r('3')}+${r('4')}])];
   [${r('%')},,${r('C')},,,,${r('E')},,,,${r('/')}]=
   ${r('blank_function')}(${Arr(r,'return escape').join('+')})()((${r('blank_array')}+${r('blank_array')})[${Arr(r,'italics').join('+')}]());
   ${r('fromCharCode')}=${r('blank_function')}(${r('e')},${Arr(r,'return String.fromCharCode(e)').join('+')});
   [${more}]=[${_more}];
   ${r('blank_function')}(${r('e')},${Arr(r, 'return eval(eval(e))').join('+')})("${Arr(r,code)}"[${Arr(r,'split').join('+')}](${r(',')})[${Arr(r,'join').join('+')}](${r('+')}));
   ${r('fromCharCode')},[${Arr(r,'sake-js')}]+${r('fromCharCode')}(${r('r')})
   })()`
  .replace(/(let|;|\n| )/g, (e) => {
      return e == ";" ? "," : "";
    });
}
function replacer(array, replaceTo){
 return function(req){ 
     return replaceTo[array.indexOf(req)]
 }
}
function build255character(options){
  let text = "いぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゛゜ゝゞゟァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺーヽヾヿㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩㄪㄫㄬㄭㄮㄯ"
  //text = '〆〇〡〢〣〤ㄍㄑ〳ヽ〴丿乀乁乂〸ㆺ〻ミˌˍˎˏ灬ꓸꓹꓺꓻ'
  if(options){
    if(options.custom && options.custom != ''){
      text = options.custom
    }
    if(options.random === true){
      let chars = {};
      for(let i of [...words]){
          let c = [...words][Math.floor(Math.random() * words.length)]
          chars[c] = c
          if(Object.keys(chars).length > 255) break
      }
      text = Object.keys(chars)
    }
  }
  let results = {}
  // shuffle array 
  text = [...text].sort( () => .5 - Math.random() ); 
  // 1 character `a`
  ;[...text].forEach(e => results[e] = {})
  // 2 character `ab`
  ;[...text].forEach(e => { 
      ;[...text].forEach(f => {
        results[e+f] = {}
      })
  })
  if(Object.keys(results).length >= 255){
      return Object.keys(results)
  }else{
  ;[...text].forEach(e => {
      ;[...text].forEach(f => {
          ;[...text].forEach(g => {
              results[e+f+g] = {}
            })
      })
  })
 }
  return Object.keys(results)
}
function removeGlobalVars(text){
  return `
  function remove(text){
      let obj = {};
      [...text].forEach(e => obj[e] = {});
      Object.keys(obj).forEach(e => {
          try{
            delete window[e]
          }catch(er){}
      })
  }
  let text = arguments.callee.caller.toString();
  remove(text);
  ${text};`.replace(/[\n]/g,'')
}
function caratersUsed(textScript){
  let res = {};
  [...textScript].forEach(e => res[e] = {});
  return Object.keys(res)
}
function needCaracters(need, declarate){
  let needs = ['+',','];
  need.forEach(e => {
      if(declarate.indexOf(e) == -1){
          needs.push(e)
      }
  })
  return needs
}

module.exports = {
  caratersUsed,
  needCaracters,
  replacer,
  buildTemplate,
  build255character,
  addOns,
  removeGlobalVars,
  globalVars
}