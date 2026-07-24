import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=23,c=`JSON.parse`,l=`console.log(key.json)`,u=btoa(String(Date.now())),d=JSON.stringify({password:u}),f=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:JSON.stringify({json:d})})}

${o()}
${i(23)}
${a(u)}

${r(`Parse the password`)}
`,p=`
/**
 * JSON.parse() converts string into data
 */

const key = get('key')[0]

// parse the "password" from \`key.json\`
let password

key.password = password
`;export{l as hint,s as level,f as prescript,p as script,c as title};