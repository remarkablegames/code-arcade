import{l as e,d as o,a as t,r,c as a,e as n}from"./sprites-CsXiAj9t.js";import"./index-CR5-BJ4V.js";import{a as i}from"./texts-D4Uwcsjn.js";const p=18;const g="JSON.parse";const k="console.log(key.json)";const s=btoa(String(Date.now()));const d=JSON.stringify({password:s});const w=`
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
