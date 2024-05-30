import{l as r,a,c as t,r as o,b as i,d as n}from"./sprites-COPK4Gqt.js";import{a as d}from"./texts-qyIFEy4l.js";import"./index-DN4CyoXJ.js";const e=16;const c="JSON.stringify";const s=JSON.stringify({level:e,year:new Date().getFullYear()});const g=`
${r()}
${a()}
${t()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: '${s}' }])

${o()}
${i(e)}
${n(s)}

${d("Stringify the password")}
`;const w=`
/**
 * JSON.stringify() is a method that converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing "level" and "year"
let password

key.password = password
`;export{e as level,g as prescript,w as script,c as title};
