import{l as a,a as r,c as t,r as o,b as d,d as p}from"./sprites-6a5ZWd5c.js";import{a as n}from"./texts-qyIFEy4l.js";import"./index-DLb_gdsO.js";const s=9;const y="Variables";const e=(new Date().getFullYear()+s)*31337;const w=`
${a()}
${r()}
${t()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: ${e} }])

${o()}
${d(s)}
${p(e)}

${n("Update password & go to key")}
`;const g=`
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;export{s as level,w as prescript,g as script,y as title};
