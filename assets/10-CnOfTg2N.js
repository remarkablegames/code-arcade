import{l as r,d as a,a as t,r as o,c as d,e as n}from"./sprites-Biiawzgm.js";import"./index-D6DF_Sn_.js";import{a as i}from"./texts-D4Uwcsjn.js";const s=10;const w="Variables";const e=(new Date().getFullYear()+s)*31337;const y=`
${r()}
${a()}
${t({pos:"100, 100"})}

add([sprite('key'), pos(center()), area(), 'key', { password: ${e} }])

${o()}
${d(s)}
${n(e)}

${i("Update password & go to key")}
`;const g=`
/**
 * A variable stores data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;export{s as level,y as prescript,g as script,w as title};
