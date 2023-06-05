/*
MIT License

Copyright (c) 2023 nuojs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(async function(){
    let words = await fetch('https://cdn.jsdelivr.net/gh/nuojs/sake-js@main/src/words.txt')
    words = await words.text()
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
     window.SakeJS = {
        obfuscate
     }
})();