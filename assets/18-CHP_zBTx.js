import{l as r,a as e,c as a,r as o,b as t,d as p}from"./sprites-X-fX4rmQ.js";import"./index-DrkCDwxr.js";import{a as d}from"./texts-qyIFEy4l.js";const i=18;const w="JSON.parse";const s=btoa(String(Date.now()));const n=JSON.stringify({password:s});const g=`
${r()}
${e()}
${a()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: '${n}' }])

${o()}
${t(i)}
${p(s)}

${d("Parse the password")}
`;const k=`
/**
 * JSON.parse() converts string into data
 */

const key = get('key')[0]

// parse the password from \`key.password\`
console.log(key.password)
let password

key.password = password
`;export{i as level,g as prescript,k as script,w as title};
