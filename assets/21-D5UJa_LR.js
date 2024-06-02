import{l as s,a as o,d as r,r as i,c as t,e as a}from"./sprites-qffG7hxt.js";import"./index-1OS901LI.js";import{a as l}from"./texts-D4Uwcsjn.js";const m=21;const d="Fullfilled Promise";const u="key.promise.then(...)";const e=btoa(String(Date.now()));const P=`
${s()}

${o({pos:"100, 100"})}
${r({pos:"center()",obj:`{ promise: Promise.resolve('${e}') }`})}

${i()}
${t(m)}
${a(e)}

${l("Pass the Promise")}

window.isPromise = (value) => value instanceof Promise
`;const v=`
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// example of successful Promise
const examplePromise = Promise.resolve('some value')
examplePromise.then((value) => {
  // console.log(value)
  key.password = value
})

// set \`key.password\` to the resolved value of \`key.promise\`
console.log('is promise?', isPromise(key.promise))
`;export{u as hint,m as level,P as prescript,v as script,d as title};
