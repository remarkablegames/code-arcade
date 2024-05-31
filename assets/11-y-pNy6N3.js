import{l as r,a as s,c as a,r as o,b as t,d as p}from"./sprites-2V4iAjb-.js";import{a as d}from"./texts-qyIFEy4l.js";import"./index-BaUw5eD3.js";const i=11;const c="For Loop";const e=Array.from(Array(42).keys()).map(()=>"answer").join("");const w=`
${r()}
${s()}
${a()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${o()}
${t(i)}
${p(e)}

${d("Repeat the password")}
`;const k=`
/**
 * A for loop repeats a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{i as level,w as prescript,k as script,c as title};
