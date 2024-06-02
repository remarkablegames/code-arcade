import{l as s,d as o,a as r,r as i,c as a,e as t}from"./sprites-x6WB0A11.js";import"./index-CImus4on.js";import{a as l}from"./texts-D4Uwcsjn.js";const m=21;const d="Fullfilled Promise";const u="key.promise.then(...)";const e=btoa(String(Date.now()));const P=`
${s()}
${o()}

${r({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.resolve('${e}') }])

${i()}
${a(m)}
${t(e)}

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
