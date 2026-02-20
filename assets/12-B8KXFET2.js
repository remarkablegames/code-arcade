import{l as r,a as t,e as a,r as o,c as n,f as i}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as d}from"./texts-D4Uwcsjn.js";const s=12;const g="Variables";const e=(new Date().getFullYear()+s)*31337;const w=String(e);const y=`
${r()}

${t({pos:"100, 100"})}
${a({pos:"center()",obj:JSON.stringify({password:e})})}

${o()}
${n(s)}
${i(e)}

${d("Update password & go to key")}
`;const m=`
/**
 * A variable stores data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;export{w as hint,s as level,y as prescript,m as script,g as title};
