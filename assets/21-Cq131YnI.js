import{l as o,a as t,d as e,r,c as a,e as n}from"./sprites-BDbM0h0-.js";import"./index-CNmIWtGc.js";import{a as i}from"./texts-D4Uwcsjn.js";const p=21;const g="JSON.parse";const w="console.log(key.json)";const s=btoa(String(Date.now()));const d=JSON.stringify({password:s});const m=`
${o()}

${t({pos:"100, 100"})}
${e({pos:"center()",obj:JSON.stringify({json:d})})}

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
`;export{w as hint,p as level,m as prescript,$ as script,g as title};
