import{l as e,a as r,d as o,r as a,c as t,e as p}from"./sprites-Dk09a4Sc.js";import"./index-DHW99aeY.js";import{a as d}from"./texts-D4Uwcsjn.js";const i=11;const l="For Loop";const s=Array.from(Array(42).keys()).map(()=>"answer").join("");const y=`
${e()}

${r({pos:"100, 100"})}
${o({pos:"center()",obj:JSON.stringify({password:s})})}

${a()}
${t(i)}
${p(s)}

${d("Repeat the password")}
`;const m=`
/**
 * A for loop repeats a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{i as level,y as prescript,m as script,l as title};
