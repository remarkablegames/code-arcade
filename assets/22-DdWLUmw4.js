import{l as o,d as s,a as r,r as t,c as a,e as i}from"./sprites-x6WB0A11.js";import"./index-CImus4on.js";import{a as c}from"./texts-D4Uwcsjn.js";const l=22;const n="Rejected Promise";const P="key.promise.catch(...)";const e=btoa(String(Date.now()));const u=`
${o()}
${s()}

${r({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.reject('${e}') }])

${t()}
${a(l)}
${i(e)}

${c("Catch the Promise")}

window.isPromise = (value) => value instanceof Promise
`;const y=`
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
`;export{P as hint,l as level,u as prescript,y as script,n as title};
