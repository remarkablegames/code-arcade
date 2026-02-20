import{l as t,a as o,e as r,r as i,c as l,f as n}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as c}from"./texts-D4Uwcsjn.js";const s=13;const $="Template Literals";const m='"hash": "${hash}"';const a=Array(10).fill(void 0).map(()=>"286755fad04869ca523320acce0dc6a4").join("");const e=`
{
  "level": ${s},
  "hash": "${a}"
}
`;const y=`
${t()}

${o({pos:"100, 100"})}
${r({pos:"center()",obj:JSON.stringify({password:e,hash:a})})}

${i()}
${l(s)}
${n(e)}

${c("Multiline password")}
`;const v=`
/**
 * A template literal allows variables to be interpolated in a string
 */

const key = get('key')[0]

const level = ${s}
const hash = key.hash

// pass in hash
const password = \`
{
  "level": \${level},
  "hash": ""
}
\`

key.password = password
`;export{m as hint,s as level,y as prescript,v as script,$ as title};
