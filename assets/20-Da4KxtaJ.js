import{l as e,d as o,a as t,r,c as a,e as n}from"./sprites-x6WB0A11.js";import"./index-CImus4on.js";import{a as i}from"./texts-D4Uwcsjn.js";const p=20;const g="JSON.parse";const k="console.log(key.json)";const s=btoa(String(Date.now()));const d=JSON.stringify({password:s});const w=`
${e()}
${o()}

${t({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { json: '${d}' }])

${r()}
${a(p)}
${n(s)}

${i("Parse the password")}
`;const $=`
/**
 * JSON.parse() converts string into data
 */

const key = get('key')[0]

// parse the "password" from \`key.json\`
let password

key.password = password
`;export{k as hint,p as level,w as prescript,$ as script,g as title};
