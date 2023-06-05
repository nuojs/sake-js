# sake-js

garbage string code in dizzying javascript

## List Code

| collection | code                 | value                               |
| ---------- | -------------------- | ----------------------------------- |
| 1          | !0+[]                | "true"                              |
| 2          | ("a","b","c")        | "c"                                 |
| 3          | []+{a:"s",m:"l"}.a   | "s"                                 |
| 4          | "ab"[1]              | "b"                                 |
| 5          | "ab"[3,0]            | "a"                                 |
| 6          | []+["m"]             | "m"                                 |
| 7          | 10..toString(16)     | "a"                                 |
| 8          | `10["toString"](16)` | "a"                                 |
| 9          | `""+[][[]]`          | "undefined"                         |
| 10         | "b"+"a"+ +"a"+"a"    | "baNaNa"                            |
| 11         | (atob+"")            | "function atob() { [native code] }" |
| 12         | []+{}                | '[object Object]'                   |
| 13         | [].a+[]              | "undefined"                         |
| 14         | 13..a+[]             | "undefined"                         |
| 15         | var[a,b] = 13..a+[]  | "u","n"                             |

```js
{
var secretKey,main, a;
''[main=function(){
return '<unknown>'
},a='constructor']
[(secretKey='my-key123'),a]
('e','console.log(e)')   // my-key123 ( eval-execute )
(secretKey,secretKey=main());
console.log(secretKey)   // <unknown>
}
```
