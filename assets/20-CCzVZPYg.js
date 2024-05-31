import{l as o,d as s,a as r,r as t,c as a,e as i}from"./sprites-M-owXaHm.js";import"./index-7cZA0KuL.js";import{a as c}from"./texts-qyIFEy4l.js";const l=20;const n="Rejected Promise";const e=btoa(String(Date.now()));const P=`
${o()}
${s()}

${r({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.reject('${e}') }])

${t()}
${a(l)}
${i(e)}

${c("Catch the Promise")}
`;const u=`
/**
 * A Promise produces a value in the future
 * If a Promise failed, it will produce a rejected value
 */

const key = get('key')[0]

// example of a failed Promise
const examplePromise = Promise.reject('some value')
examplePromise.catch((value) => {
  console.log(value)
})

// set \`key.password\` to the rejected value of \`key.promise\`
console.log('is promise?', key.promise instanceof Promise)
`;export{l as level,P as prescript,u as script,n as title};
