import{l as o,a as s,d as r,r as t,c as a,e as i}from"./sprites-Bp0J9eWI.js";import"./index-DpKqo4uQ.js";import{a as c}from"./texts-D4Uwcsjn.js";const l=22;const d="Rejected Promise";const P="key.promise.catch(...)";const e=btoa(String(Date.now()));const u=`
${o()}

${s({pos:"100, 100"})}
${r({pos:"center()",obj:`{ promise: Promise.reject('${e}') }`})}

${t()}
${a(l)}
${i(e)}

${c("Catch the Promise")}

window.isPromise = (value) => value instanceof Promise
`;const v=`
/**
 * A Promise produces a value in the future
 * If a Promise failed, it will produce a rejected value
 */

const key = get('key')[0]

// example of failed Promise
const examplePromise = Promise.reject('some value')
examplePromise.catch((value) => {
  // console.log(value)
  key.password = value
})

// set \`key.password\` to the rejected value of \`key.promise\`
console.log('is promise?', isPromise(key.promise))
`;export{P as hint,l as level,u as prescript,v as script,d as title};
