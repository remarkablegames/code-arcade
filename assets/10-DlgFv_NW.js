import{l as r,a as t,d as a,r as o,c as n,e as i}from"./sprites-pbbtTCsC.js";import"./index-CvehV_3K.js";import{a as d}from"./texts-D4Uwcsjn.js";const s=10;const g="Variables";const e=(new Date().getFullYear()+s)*31337;const w=String(e);const y=`
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
