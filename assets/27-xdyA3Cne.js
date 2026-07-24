import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=27,c=`Rejected Promise`,l=`key.promise.catch(...)`,u=btoa(String(Date.now())),d=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:`{ promise: Promise.reject('${u}') }`})}

${o()}
${i(27)}
${a(u)}

${r(`Catch the Promise`)}

window.isPromise = (value) => value instanceof Promise
`,f=`
/**
 * A Promise produces a value in the future
 * If a Promise failed, it will produce a rejected value
 */

const key = get('key')[0]

// set \`key.password\` to the rejected value of \`key.promise\`
key.promise
`;export{l as hint,s as level,d as prescript,f as script,c as title};