import{l as s,a as o,d as r,r as t,c as i,e as a}from"./sprites-BJl0l-Y-.js";import"./index-BOTDccgU.js";import{a as d}from"./texts-D4Uwcsjn.js";const l=23;const m="Fullfilled Promise";const u="key.promise.then(...)";const e=btoa(String(Date.now()));const y=`
${s()}

${o({pos:"100, 100"})}
${r({pos:"center()",obj:`{ promise: Promise.resolve('${e}') }`})}

${t()}
${i(l)}
${a(e)}

${d("Pass the Promise")}
`;const P=`
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// set \`key.password\` to the resolved value of \`key.promise\`
key.promise
`;export{u as hint,l as level,y as prescript,P as script,m as title};
