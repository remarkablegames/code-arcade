import{c as e,h as t,i as n,m as r,p as i,r as a,t as o}from"./index--3CafFNT.js";var s=27,c=`Rejected Promise`,l=`key.promise.catch(...)`,u=btoa(String(Date.now())),d=`
${e()}

${n({pos:`100, 100`})}
${a({pos:`center()`,obj:`{ promise: Promise.reject('${u}') }`})}

${r()}
${t(27)}
${i(u)}

${o(`Catch the Promise`)}

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