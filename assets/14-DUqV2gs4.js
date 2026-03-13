import{c as e,h as t,i as n,m as r,p as i,r as a,t as o}from"./index--3CafFNT.js";var s=14,c=`For Loop`,l=`Array(42).fill().map(...).join('')`,u=Array.from(Array(42).keys()).map(()=>`answer`).join(``),d=`
${e()}

${n({pos:`100, 100`})}
${a({pos:`center()`,obj:JSON.stringify({password:u})})}

${r()}
${t(14)}
${i(u)}

${o(`Repeat the password`)}
`,f=`
/**
 * A for loop repeats a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{l as hint,s as level,d as prescript,f as script,c as title};