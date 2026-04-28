import{c as e,h as t,i as n,m as r,p as i,r as a,t as o}from"./index-C2wpxjHL.js";var s=13,c=`Template Literals`,l='"hash": "${hash}"',u=Array(10).fill(void 0).map(()=>`286755fad04869ca523320acce0dc6a4`).join(``),d=`
{
  "level": 13,
  "hash": "${u}"
}
`,f=`
${e()}

${n({pos:`100, 100`})}
${a({pos:`center()`,obj:JSON.stringify({password:d,hash:u})})}

${r()}
${t(13)}
${i(d)}

${o(`Multiline password`)}
`,p=`
/**
 * A template literal allows variables to be interpolated in a string
 */

const key = get('key')[0]

const level = 13
const hash = key.hash

// pass in hash
const password = \`
{
  "level": \${level},
  "hash": ""
}
\`

key.password = password
`;export{l as hint,s as level,f as prescript,p as script,c as title};