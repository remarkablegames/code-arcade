import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=22,c=`JSON.stringify`,l=`{ level: _, year: _ }`,u=JSON.stringify({level:22,year:new Date().getFullYear()}),d=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:JSON.stringify({password:u})})}

${o()}
${i(22)}
${a(u)}

${r(`Stringify the password`)}
`,f=`
/**
 * JSON.stringify() converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing "level" and "year"
let password

key.password = password
`;export{l as hint,s as level,d as prescript,f as script,c as title};