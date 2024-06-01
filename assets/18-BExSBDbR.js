import{l as e,d as o,a as r,r as t,c as a,e as n}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a as i}from"./texts-D4Uwcsjn.js";const p=18;const g="JSON.parse";const s=btoa(String(Date.now()));const d=JSON.stringify({password:s});const k=`
${e()}
${o()}

${r({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { json: '${d}' }])

${t()}
${a(p)}
${n(s)}

${i("Parse the password")}
`;const w=`
/**
 * JSON.parse() converts string into data
 */

const key = get('key')[0]

// parse the "password" from \`key.json\`
// console.log(key.json)
let password

key.password = password
`;export{p as level,k as prescript,w as script,g as title};
