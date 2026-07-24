import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=12,c=`Variables`,l=(new Date().getFullYear()+12)*31337,u=String(l),d=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:JSON.stringify({password:l})})}

${o()}
${i(12)}
${a(l)}

${r(`Update password & go to key`)}
`,f=`
/**
 * A variable stores data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;export{u as hint,s as level,d as prescript,f as script,c as title};