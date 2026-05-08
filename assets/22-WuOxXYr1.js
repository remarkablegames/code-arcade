import{c as e,h as t,i as n,m as r,p as i,r as a,t as o}from"./index-C2wpxjHL.js";var s=22,c=`JSON.stringify`,l=`{ level: _, year: _ }`,u=JSON.stringify({level:22,year:new Date().getFullYear()}),d=`
${e()}

${n({pos:`100, 100`})}
${a({pos:`center()`,obj:JSON.stringify({password:u})})}

${r()}
${t(22)}
${i(u)}

${o(`Stringify the password`)}
`,f=`
/**
 * JSON.stringify() converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing "level" and "year"
let password

key.password = password
`;export{l as hint,s as level,d as prescript,f as script,c as title};