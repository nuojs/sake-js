let SakeJS = require("./src");

let execSync = require("child_process");

function clearLog() {
  try {
    execSync("clear", { stdio: "inherit" });
  } catch (e) {}
}
clearLog();

let text = `
function main(t){
    var a = 5
    console.log(t, a)
}
main("hello world!!") 
`;
let invisibleCaracter = "ﾠㅤㆍ";
// invisibleCaracter = invisibleCaracter.split("").map((e) => e.charCodeAt(0));
let res = SakeJS.obfuscate(text);
// console.log(res);
 
let rdm = SakeJS.obfuscate(text, { random: true });

let custom = SakeJS.obfuscate(text, {
  custom: "〆〇〡〢〣〤ㄍㄑ〳ヽ〴丿乀乁乂〸ㆺ〻ミ",
});

console.log(custom);
