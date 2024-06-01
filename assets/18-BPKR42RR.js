import{l as t,d as r,a,r as o,c as i,e as n}from"./sprites-9QqjVnbm.js";import"./index-BirVoFn6.js";import{a as d}from"./texts-D4Uwcsjn.js";const s=18;const y="JSON.stringify";const g="{ level: _, year: _ }";const e=JSON.stringify({level:s,year:new Date().getFullYear()});const w=`
${t()}
${r()}

${a({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${o()}
${i(s)}
${n(e)}

${d("Stringify the password")}
`;const $=`
/**
 * JSON.stringify() converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing "level" and "year"
let password

key.password = password
`;export{g as hint,s as level,w as prescript,$ as script,y as title};
