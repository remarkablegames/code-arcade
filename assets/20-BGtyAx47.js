import{l as o,a as r,c as s,r as a,b as t,d as i}from"./sprites-BrmzA_Ln.js";import"./index-CXtlFtJb.js";import{a as l}from"./texts-qyIFEy4l.js";const c=20;const n="Rejected Promise";const e=btoa(String(Date.now()));const P=`
${o()}
${r()}
${s()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.reject('${e}') }])

${a()}
${t(c)}
${i(e)}

${l("Catch the Promise")}
`;const y=`
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
`;export{c as level,P as prescript,y as script,n as title};
