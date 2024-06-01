import{l as s,d as o,a as r,r as a,c as i,e as t}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a as l}from"./texts-D4Uwcsjn.js";const m=19;const d="Fullfilled Promise";const e=btoa(String(Date.now()));const u=`
${s()}
${o()}

${r({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.resolve('${e}') }])

${a()}
${i(m)}
${t(e)}

${l("Pass the Promise")}
`;const P=`
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// example of successful Promise
const examplePromise = Promise.resolve('some value')
examplePromise.then((value) => {
  console.log(value)
  key.password = value
})

// set \`key.password\` to the resolved value of \`key.promise\`
console.log('is promise?', isPromise(key.promise))

function isPromise(value) {
  return value instanceof Promise
}
`;export{m as level,u as prescript,P as script,d as title};
