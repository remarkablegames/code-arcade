import{l as r,a,c as t,r as o,b as i,d as n}from"./sprites-BrmzA_Ln.js";import"./index-CXtlFtJb.js";import{a as d}from"./texts-qyIFEy4l.js";const s=17;const c="JSON.stringify";const e=JSON.stringify({level:s,year:new Date().getFullYear()});const g=`
${r()}
${a()}
${t()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${o()}
${i(s)}
${n(e)}

${d("Stringify the password")}
`;const w=`
/**
 * JSON.stringify() converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing "level" and "year"
let password

key.password = password
`;export{s as level,g as prescript,w as script,c as title};
