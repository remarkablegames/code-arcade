import{l as e,a as r,e as a,r as o,c as i,f as n}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as d}from"./texts-D4Uwcsjn.js";const t=22;const y="JSON.stringify";const g="{ level: _, year: _ }";const s=JSON.stringify({level:t,year:new Date().getFullYear()});const f=`
${e()}

${r({pos:"100, 100"})}
${a({pos:"center()",obj:JSON.stringify({password:s})})}

${o()}
${i(t)}
${n(s)}

${d("Stringify the password")}
`;const w=`
/**
 * JSON.stringify() converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing "level" and "year"
let password

key.password = password
`;export{g as hint,t as level,f as prescript,w as script,y as title};
