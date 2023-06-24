# sake-js

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM any][size-image]][size-url]

[npm-image]: https://img.shields.io/npm/v/sake-js.svg
[npm-url]: https://npmjs.org/package/sake-js
[downloads-image]: https://img.shields.io/npm/dm/sake-js.svg
[downloads-url]: https://npmjs.org/package/sake-js
[size-image]: https://packagephobia.com/badge?p=sake-js
[size-url]: https://packagephobia.com/result?p=sake-js

JavaScript encryption <br>
garbage string code in dizzying javascript

### [demo](https://nuojs.github.io/sake-js/demo.html)

## install

```
npm install sake-js
```

browser

```html
<script src="https://cdn.jsdelivr.net/npm/sake-js@1.1.3/browser/index.min.js"></script>
```

usage

```js
// window.SakeJS -> browser
let SakeJS = require("sake-js");
let text = `
function main(t){
    console.log(t)
}
main("hello world!!") 
`;
let res = SakeJS.obfuscate(text);
console.log(res);
// [れ,テ,び,エ,ア,,よ,ギ,ヅ,フ,,,,ツ,,ず]="."+{},ト=[],[,ナ,セ,が,き,ゎ,ソ,ヤ,,,ざ,タ,,,ね]=[!!よ]+!よ+よ.よ,[,,,,,,,,,ぽ,,,,,ゥ]=れ[ツ+=び+ざ+ヤ+ギ+ナ+セ+よ+ギ+び+ナ]+ト,[,,,,,,,,ン,,,,,ヒ,ヲ,,バ,,,,,,,レ,,,,,,,,,ホ]=[][き+ね+ソ+ソ]+ト,プ=[ギ+び+ぽ+ギ+ナ+ね+ざ+ゥ],[ゾ,,ポ,,ダ,,ル,,け,,ゼ,,ピ,,゜,,ッ,,は]=[+ン,++ン,++ン,++ン,++ン,++ン,++ン,++ン,++ン,++ン]+ト,ペ=ト[ツ][ツ],メ=ペ(が,ナ+が+ギ+セ+ナ+ざ+ヅ+が+れ+ギ+び+ぽ+ギ+ナ+ね+ざ+ゥ+ヒ+ル+ピ+ヲ),[ヂ,の,ヨ,マ,ベ]=[メ(+[ダ+ゼ]),メ(+[ポ+゜]),メ(+[ダ+ダ]),メ(+[ダ+ゾ]),メ(+[ル+け])],[ぬ,,ゟ,,,,ヘ,,,,ご]=ペ(ナ+が+ギ+セ+ナ+ざ+ヅ+が+ヤ+よ+ゎ+ヂ+が)()((ト+ト)[ね+ギ+ゎ+ソ+ね+よ+ヤ]()),ヌ=ペ(が,ナ+が+ギ+セ+ナ+ざ+ヅ+ぽ+ギ+ナ+ね+ざ+ゥ+れ+き+ナ+び+ヨ+ゟ+の+ゎ+ナ+ゟ+び+タ+が+ヒ+が+ヲ),[ぐ,ガ,リ,シ,ブ,ガ,ラ,ま,ヱ]=[ヌ(+[け+ル]),ヌ(+[け+け]),ヌ(+[ッ+ポ+は+け]),ヌ(+[ポ+ゾ]),ヌ(+[ピ+ポ]),ヌ(+[け+け]),ヌ(+[ル+け]),ヌ(+[ポ+ポ+は]),ヌ(+[ル+ル])],ペ(が,が+レ+ゎ+ソ+ヒ+が+レ+ゎ+ソ+ヒ+が+ヲ+ヲ)(/シ き セ ざ よ ギ ね び ざ ヅ ヨ ゎ ね ざ ヒ ギ ヲ バ シ ヅ ヅ ヅ ヅ レ ゎ ナ ヅ ゎ ヅ ブ ヅ ゼ シ ヅ ヅ ヅ ヅ よ び ざ ヤ び ソ が れ ソ び ゥ ヒ ギ ガ ヅ ゎ ヲ シ ホ シ ヨ ゎ ね ざ ヒ ラ の が ソ ソ び ヅ ま び ナ ソ タ ヱ ヱ ラ ヲ ヅ シ/[ヤ+び+セ+ナ+よ+が][ヤ+ヂ+ソ+ね+ギ](リ)[ア+び+ね+ざ](ぐ)),ヌ,[ぽ,ゎ,マ,が,,ぽ]+ヌ(ナ)
```

## options

```js
type options = {
    random: boolean
    custom: string
}
```

## use options

```js
let SakeJS = require("sake-js");
let text = `
function main(t){
    console.log(t)
}
main("hello world!!") 
`;
let res = SakeJS.obfuscate(text, { random: true });
// [쌓,쵪,걊,ჽ,攩,,峝,妁,嵀,뿈,,,,㻝,,졉]="."+{},坧=[],[,ʞ,땻,闿,듸,䨊,왈,씯,,,ꘖ,镥,,,亅]=[!!峝]+!峝+峝.峝,[,,,,,,,,,纍,,,,,ﲅ]=쌓[㻝+=걊+ꘖ+씯+妁+ʞ+땻+峝+妁+걊+ʞ]+坧,[,,,,,,,,粷,,,,,獍,ꐊ,,혥,,,,,,,뤚,,,,,,,,,漌]=[][듸+亅+왈+왈]+坧,섄=[妁+걊+纍+妁+ʞ+亅+ꘖ+ﲅ],[娃,,䋮,,뉛,,뎖,,굩,,텫,,맢,,ὧ,,ᾢ,,ꨒ]=[+粷,++粷,++粷,++粷,++粷,++粷,++粷,++粷,++粷,++粷]+坧,踺=坧[㻝][㻝],糴=踺(闿,ʞ+闿+妁+땻+ʞ+ꘖ+嵀+闿+쌓+妁+걊+纍+妁+ʞ+亅+ꘖ+ﲅ+獍+뎖+맢+ꐊ),[厚,ឌ,若,䞫,㾺]=[糴(+[뉛+텫]),糴(+[䋮+ὧ]),糴(+[뉛+뉛]),糴(+[뉛+娃]),糴(+[뎖+굩])],[Օ,,禟,,,,㛧,,,,丘]=踺(ʞ+闿+妁+땻+ʞ+ꘖ+嵀+闿+씯+峝+䨊+厚+闿)()((坧+坧)[亅+妁+䨊+왈+亅+峝+씯]()),堟=踺(闿,ʞ+闿+妁+땻+ʞ+ꘖ+嵀+纍+妁+ʞ+亅+ꘖ+ﲅ+쌓+듸+ʞ+걊+若+禟+ឌ+䨊+ʞ+禟+걊+镥+闿+獍+闿+ꐊ),[俙,羕,쪸,鹒,汣,羕,굡,㓱,땅]=[堟(+[굩+뎖]),堟(+[굩+굩]),堟(+[ᾢ+䋮+ꨒ+굩]),堟(+[䋮+娃]),堟(+[맢+䋮]),堟(+[굩+굩]),堟(+[뎖+굩]),堟(+[䋮+䋮+ꨒ]),堟(+[뎖+뎖])],踺(闿,闿+뤚+䨊+왈+獍+闿+뤚+䨊+왈+獍+闿+ꐊ+ꐊ)(/鹒 듸 땻 ꘖ 峝 妁 亅 걊 ꘖ 嵀 若 䨊 亅 ꘖ 獍 妁 ꐊ 혥 鹒 嵀 嵀 嵀 嵀 뤚 䨊 ʞ 嵀 䨊 嵀 汣 嵀 텫 鹒 嵀 嵀 嵀 嵀 峝 걊 ꘖ 씯 걊 왈 闿 쌓 왈 걊 ﲅ 獍 妁 羕 嵀 䨊 ꐊ 鹒 漌 鹒 若 䨊 亅 ꘖ 獍 굡 ឌ 闿 왈 왈 걊 嵀 㓱 걊 ʞ 왈 镥 땅 땅 굡 ꐊ 嵀 鹒/[씯+걊+땻+ʞ+峝+闿][씯+厚+왈+亅+妁](쪸)[攩+걊+亅+ꘖ](俙)),堟,[纍,䨊,䞫,闿,,纍]+堟(ʞ)
let res = SakeJS.obfuscate(text, {
  custom: "〆〇〡〢〣〤ㄍㄑ〳ヽ〴丿乀乁乂〸ㆺ〻ミ",
});
// [〻,〣〣,〣〤,〣ミ,〣ㆺ,,〣〳,〣ㄑ,〣〇,〣乁,,,,〣,,〣〢]="."+{},〳=[],[,〣乀,〣〴,〣〡,〣丿,〣ヽ,〣〸,〣乂,,,〣ㄍ,〣〆,,,〣〻]=[!!〣〳]+!〣〳+〣〳.〣〳,[,,,,,,,,,〤〣,,,,,〤〤]=〻[〣+=〣〤+〣ㄍ+〣乂+〣ㄑ+〣乀+〣〴+〣〳+〣ㄑ+〣〤+〣乀]+〳,[,,,,,,,,〇,,,,,〤〡,〤〳,,〤ミ,,,,,,,〤〸,,,,,,,,,〤ㆺ]=[][〣丿+〣〻+〣〸+〣〸]+〳,ㆺ=[〣ㄑ+〣〤+〤〣+〣ㄑ+〣乀+〣〻+〣ㄍ+〤〤],[乁,,〢,,乀,,〴,,丿,,ヽ,,〸,,乂,,ㄍ,,〆]=[+〇,++〇,++〇,++〇,++〇,++〇,++〇,++〇,++〇,++〇]+〳,〤=〳[〣][〣],ミ=〤(〣〡,〣乀+〣〡+〣ㄑ+〣〴+〣乀+〣ㄍ+〣〇+〣〡+〻+〣ㄑ+〣〤+〤〣+〣ㄑ+〣乀+〣〻+〣ㄍ+〤〤+〤〡+〴+〸+〤〳),[〤〢,〤乂,〤乀,〤〴,〤乁]=[ミ(+[乀+ヽ]),ミ(+[〢+乂]),ミ(+[乀+乀]),ミ(+[乀+乁]),ミ(+[〴+丿])],[〤ㄑ,,〤ヽ,,,,〤〇,,,,〤丿]=〤(〣乀+〣〡+〣ㄑ+〣〴+〣乀+〣ㄍ+〣〇+〣〡+〣乂+〣〳+〣ヽ+〤〢+〣〡)()((〳+〳)[〣〻+〣ㄑ+〣ヽ+〣〸+〣〻+〣〳+〣乂]()),ㄑ=〤(〣〡,〣乀+〣〡+〣ㄑ+〣〴+〣乀+〣ㄍ+〣〇+〤〣+〣ㄑ+〣乀+〣〻+〣ㄍ+〤〤+〻+〣丿+〣乀+〣〤+〤乀+〤ヽ+〤乂+〣ヽ+〣乀+〤ヽ+〣〤+〣〆+〣〡+〤〡+〣〡+〤〳),[〤ㄍ,〤〆,〤〻,ミ〣,ミ〤,〤〆,ミㆺ,ミ〡,ミ〳]=[ㄑ(+[丿+〴]),ㄑ(+[丿+丿]),ㄑ(+[ㄍ+〢+〆+丿]),ㄑ(+[〢+乁]),ㄑ(+[〸+〢]),ㄑ(+[丿+丿]),ㄑ(+[〴+丿]),ㄑ(+[〢+〢+〆]),ㄑ(+[〴+〴])],〤(〣〡,〣〡+〤〸+〣ヽ+〣〸+〤〡+〣〡+〤〸+〣ヽ+〣〸+〤〡+〣〡+〤〳+〤〳)(/ミ〣 〣丿 〣〴 〣ㄍ 〣〳 〣ㄑ 〣〻 〣〤 〣ㄍ 〣〇 〤乀 〣ヽ 〣〻 〣ㄍ 〤〡 〣ㄑ 〤〳 〤ミ ミ〣 〣〇 〣〇 〣〇 〣〇 〤〸 〣ヽ 〣乀 〣〇 〣ヽ 〣〇 ミ〤 〣〇 ヽ ミ〣 〣〇 〣〇 〣〇 〣〇 〣〳 〣〤 〣ㄍ 〣乂 〣〤 〣〸 〣〡 〻 〣〸 〣〤 〤〤 〤〡 〣ㄑ 〤〆 〣〇 〣ヽ 〤〳 ミ〣 〤ㆺ ミ〣 〤乀 〣ヽ 〣〻 〣ㄍ 〤〡 ミㆺ 〤乂 〣〡 〣〸 〣〸 〣〤 〣〇 ミ〡 〣〤 〣乀 〣〸 〣〆 ミ〳 ミ〳 ミㆺ 〤〳 〣〇 ミ〣/[〣乂+〣〤+〣〴+〣乀+〣〳+〣〡][〣乂+〤〢+〣〸+〣〻+〣ㄑ](〤〻)[〣ㆺ+〣〤+〣〻+〣ㄍ](〤ㄍ)),ㄑ,[〤〣,〣ヽ,〤〴,〣〡,,〤〣]+ㄑ(〣乀)
```

## Get more custom [words](https://nuojs.github.io/sake-js/words.html)

https://nuojs.github.io/sake-js/words.html

## Refferance from [aem1k.com](http://aem1k.com/)

