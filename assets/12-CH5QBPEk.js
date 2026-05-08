import{c as e,h as t,i as n,m as r,p as i,r as a,t as o}from"./index-C2wpxjHL.js";var s=12,c=`Variables`,l=(new Date().getFullYear()+12)*31337,u=String(l),d=`
${e()}

${n({pos:`100, 100`})}
${a({pos:`center()`,obj:JSON.stringify({password:l})})}

${r()}
${t(12)}
${i(l)}

${o(`Update password & go to key`)}
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