import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=14,c=`For Loop`,l=`Array(42).fill().map(...).join('')`,u=Array.from(Array(42).keys()).map(()=>`answer`).join(``),d=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:JSON.stringify({password:u})})}

${o()}
${i(14)}
${a(u)}

${r(`Repeat the password`)}
`,f=`
/**
 * A for loop repeats a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{l as hint,s as level,d as prescript,f as script,c as title};