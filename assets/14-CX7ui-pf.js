import{l as r,a as e,e as o,r as a,c as t,f as p}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as i}from"./texts-D4Uwcsjn.js";const n=14;const w="For Loop";const y="Array(42).fill().map(...).join('')";const s=Array.from(Array(42).keys()).map(()=>"answer").join("");const m=`
${r()}

${e({pos:"100, 100"})}
${o({pos:"center()",obj:JSON.stringify({password:s})})}

${a()}
${t(n)}
${p(s)}

${i("Repeat the password")}
`;const f=`
/**
 * A for loop repeats a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{y as hint,n as level,m as prescript,f as script,w as title};
