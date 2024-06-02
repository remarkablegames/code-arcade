import{l as r,a,d as t,r as o,c as n,e as d}from"./sprites-CxDhdz3F.js";import"./index-DDIO_too.js";import{a as i}from"./texts-D4Uwcsjn.js";const s=10;const g="Variables";const e=(new Date().getFullYear()+s)*31337;const w=`
${r()}

${a({pos:"100, 100"})}
${t({pos:"center()",obj:JSON.stringify({password:e})})}

${o()}
${n(s)}
${d(e)}

${i("Update password & go to key")}
`;const y=`
/**
 * A variable stores data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;export{s as level,w as prescript,y as script,g as title};
