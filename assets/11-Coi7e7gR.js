import{l as s,d as r,a as o,r as a,c as t,e as p}from"./sprites-D-jmo7he.js";import"./index-BuzeCisW.js";import{a as d}from"./texts-D4Uwcsjn.js";const i=11;const l="For Loop";const e=Array.from(Array(42).keys()).map(()=>"answer").join("");const y=`
${s()}
${r()}
${o({pos:"100, 100"})}

add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${a()}
${t(i)}
${p(e)}

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
