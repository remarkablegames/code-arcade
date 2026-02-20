import{l as s,a as o,e as r,r as t,c as i,f as a}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as l}from"./texts-D4Uwcsjn.js";const d=26;const m="Fullfilled Promise";const u="key.promise.then(...)";const e=btoa(String(Date.now()));const y=`
${s()}

${o({pos:"100, 100"})}
${r({pos:"center()",obj:`{ promise: Promise.resolve('${e}') }`})}

${t()}
${i(d)}
${a(e)}

${l("Pass the Promise")}
`;const P=`
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// set \`key.password\` to the resolved value of \`key.promise\`
key.promise
`;export{u as hint,d as level,y as prescript,P as script,m as title};
