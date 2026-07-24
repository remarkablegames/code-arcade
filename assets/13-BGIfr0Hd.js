import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=13,c=`Template Literals`,l='"hash": "${hash}"',u=Array(10).fill(void 0).map(()=>`286755fad04869ca523320acce0dc6a4`).join(``),d=`
{
  "level": 13,
  "hash": "${u}"
}
`,f=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:JSON.stringify({password:d,hash:u})})}

${o()}
${i(13)}
${a(d)}

${r(`Multiline password`)}
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