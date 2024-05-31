import{l as e,d as r,a as o,r as a,c as t,e as p}from"./sprites-M-owXaHm.js";import"./index-7cZA0KuL.js";import{a as d}from"./texts-qyIFEy4l.js";const i=18;const y="JSON.parse";const s=btoa(String(Date.now()));const n=JSON.stringify({password:s});const g=`
${e()}
${r()}

${o({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { password: '${n}' }])

${a()}
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
`;export{i as level,g as prescript,k as script,y as title};
