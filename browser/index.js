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
(async function(){let n={};[...Array(66666).keys()].forEach(((t,r)=>{if(r<255)return;let e=String.fromCharCode(t);if("$"!=e&&"_"!=e)try{eval("var "+e+"=1"),n[e]={}}catch(t){}}));let t=Object.keys(n).join(""),r=["0","1","2","3","4","5","6","7","8","9",".","[","o","b","j","e","c","t"," ","O","]","r","u","f","a","l","s","n","d","i","S","g","{","}","(",")","%","E","y","p","m","k","/","C","v","h"],e=["constructor","blank_function","toString_36","toString","_eval","blank_array","fromCharCode","empty"];function o(n,t){return[...t].map((t=>n(t)))}function $(n,t,r){let e=[,...o(n,"ruefals"),,,n("n"),n("d"),,,n("i")],$=[...o(n,".[obj"),,n("c"),n("t"),n(" "),n("O"),,,,n("constructor"),,n("]")],a=o(n,"toString").join("+"),c=n("c"),i=o(n,"fill").join("+"),l=o(n,"phmky"),f=o(n,r.join("")),u=r.map((t=>n("fromCharCode")+"(+["+o(n,t.charCodeAt(0).toString()).join("+")+"])")),y=[n("0"),,n("1"),,n("2"),,n("3"),,n("4"),,n("5"),,n("6"),,n("7"),,n("8"),,n("9")];return`\n       (function(){\n       [${$}]="."+{};\n       ${n("blank_array")}=[];\n       [${e}]=[!!${c}] + !${c} + ${c}.${c};\n       [,,,,,,,,,${n("S")},,,,,${n("g")}] = ${n(".")}[${n("constructor")} += ${o(n,"onstructor").join("+")}]+${n("blank_array")};\n       [,,,,,,,,${n("empty")},,,,,${o(n,"()")},,${n("{")},,,,,,,${n("v")},,,,,,,,,${n("}")}]=\n       [][${i}]+${n("blank_array")};\n       ${n("toString")}=[${a}];\n       [${y}]=[+${n("empty")},++${n("empty")},++${n("empty")},++${n("empty")},++${n("empty")},++${n("empty")},++${n("empty")},++${n("empty")},++${n("empty")},++${n("empty")}]+${n("blank_array")};\n       ${n("blank_function")}=${n("blank_array")}[${n("constructor")}][${n("constructor")}];\n       ${n("toString_36")}=${n("blank_function")}(${n("e")},${o(n,"return e.toString(36)").join("+")});\n       [${l}]=[${n("toString_36")}(+[${n("2")}+${n("5")}]),${n("toString_36")}(+[${n("1")}+${n("7")}]),${n("toString_36")}(+[${n("2")}+${n("2")}]),${n("toString_36")}(+[${n("2")}+${n("0")}]),${n("toString_36")}(+[${n("3")}+${n("4")}])];\n       [${n("%")},,${n("C")},,,,${n("E")},,,,${n("/")}]=\n       ${n("blank_function")}(${o(n,"return escape").join("+")})()((${n("blank_array")}+${n("blank_array")})[${o(n,"italics").join("+")}]());\n       ${n("fromCharCode")}=${n("blank_function")}(${n("e")},${o(n,"return String.fromCharCode(e)").join("+")});\n       [${f}]=[${u}];\n       ${n("blank_function")}(${n("e")},${o(n,"return eval(eval(e))").join("+")})("${o(n,t)}"[${o(n,"split").join("+")}](${n(",")})[${o(n,"join").join("+")}](${n("+")}));\n       ${n("fromCharCode")},[${o(n,"sake-js")}]+${n("fromCharCode")}(${n("r")})\n       })()`.replace(/(let|;|\n| )/g,(n=>";"==n?",":""))}function a(n,t){return function(r){return t[n.indexOf(r)]}}function c(n){let r="いぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゛゜ゝゞゟァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺーヽヾヿㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩㄪㄫㄬㄭㄮㄯ";if(n&&(n.custom&&""!=n.custom&&(r=n.custom),!0===n.random)){let n={};for(let r of[...t]){let r=[...t][Math.floor(Math.random()*t.length)];if(n[r]=r,Object.keys(n).length>255)break}r=Object.keys(n)}let e={};return r=[...r].sort((()=>.5-Math.random())),[...r].forEach((n=>e[n]={})),[...r].forEach((n=>{[...r].forEach((t=>{e[n+t]={}}))})),Object.keys(e).length>=255||[...r].forEach((n=>{[...r].forEach((t=>{[...r].forEach((r=>{e[n+t+r]={}}))}))})),Object.keys(e)}function i(n){return`\n      function remove(text){\n          let obj = {};\n          [...text].forEach(e => obj[e] = {});\n          Object.keys(obj).forEach(e => {\n              try{\n                delete window[e]\n              }catch(er){}\n          })\n      }\n      let text = arguments.callee.caller.toString();\n      remove(text);\n      ${n};`.replace(/[\n]/g,"")}function l(n){let t={};return[...n].forEach((n=>t[n]={})),Object.keys(t)}function f(n,t){let r=["+",","];return n.forEach((n=>{-1==t.indexOf(n)&&r.push(n)})),r}function u(n,t){let o=f(l(n=i(n)),r);return $(a([...e,...r,...o],c(t)),n,o)}window.SakeJS={obfuscate:u}})();
