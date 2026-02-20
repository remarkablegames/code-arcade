import{l as o,a as s,e as t,r,c as i,f as a}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as c}from"./texts-D4Uwcsjn.js";const n=27;const l="Rejected Promise";const P="key.promise.catch(...)";const e=btoa(String(Date.now()));const u=`
${o()}

${s({pos:"100, 100"})}
${t({pos:"center()",obj:`{ promise: Promise.reject('${e}') }`})}

${r()}
${i(n)}
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
`;export{P as hint,n as level,u as prescript,y as script,l as title};
