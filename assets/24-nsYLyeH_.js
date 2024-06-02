import{l as o,a as s,d as t,r,c as i,e as a}from"./sprites-CxDhdz3F.js";import"./index-DDIO_too.js";import{a as c}from"./texts-D4Uwcsjn.js";const d=24;const l="Rejected Promise";const P="key.promise.catch(...)";const e=btoa(String(Date.now()));const u=`
${o()}

${s({pos:"100, 100"})}
${t({pos:"center()",obj:`{ promise: Promise.reject('${e}') }`})}

${r()}
${i(d)}
${a(e)}

${c("Catch the Promise")}

window.isPromise = (value) => value instanceof Promise
`;const y=`
/**
 * A Promise produces a value in the future
 * If a Promise failed, it will produce a rejected value
 */

const key = get('key')[0]

// set \`key.password\` to the rejected value of \`key.promise\`
key.promise
`;export{P as hint,d as level,u as prescript,y as script,l as title};
