import{l as s,d as o,a as r,r as a,c as t,e as i}from"./sprites-M-owXaHm.js";import"./index-7cZA0KuL.js";import{a as l}from"./texts-qyIFEy4l.js";const m=19;const n="Fullfilled Promise";const e=btoa(String(Date.now()));const u=`
${s()}
${o()}

${r({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.resolve('${e}') }])

${a()}
${t(m)}
${i(e)}

${l("Pass the Promise")}
`;const P=`
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// example of a successful Promise
const examplePromise = Promise.resolve('some value')
examplePromise.then((value) => {
  console.log(value)
})

// set \`key.password\` to the resolved value of \`key.promise\`
console.log('is promise?', key.promise instanceof Promise)
`;export{m as level,u as prescript,P as script,n as title};
