import{l as r,d as t,a,r as o,c as i,e as n}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a as d}from"./texts-D4Uwcsjn.js";const e=17;const l="JSON.stringify";const s=JSON.stringify({level:e,year:new Date().getFullYear()});const g=`
${r()}
${t()}

${a({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { password: '${s}' }])

${o()}
${i(e)}
${n(s)}

${d("Stringify the password")}
`;const w=`
/**
 * JSON.stringify() converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing key-value pairs of "level" and "year"
let password

key.password = password
`;export{e as level,g as prescript,w as script,l as title};
