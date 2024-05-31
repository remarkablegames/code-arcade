import{l as s,a as o,c as r,r as a,b as t,d as i}from"./sprites-2V4iAjb-.js";import{a as l}from"./texts-qyIFEy4l.js";import"./index-BaUw5eD3.js";const p=19;const n="Fullfilled Promise";const e=btoa(String(Date.now()));const u=`
${s()}
${o()}
${r()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.resolve('${e}') }])

${a()}
${t(p)}
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
`;export{p as level,u as prescript,P as script,n as title};
