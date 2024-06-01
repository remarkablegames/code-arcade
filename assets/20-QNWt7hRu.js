import{l as o,d as s,a as r,r as t,c as a,e as i}from"./sprites-DyQZo6jA.js";import"./index-Bxcebhqn.js";import{a as l}from"./texts-D4Uwcsjn.js";const c=20;const d="Rejected Promise";const e=btoa(String(Date.now()));const u=`
${o()}
${s()}

${r({pos:"100, 100"})}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.reject('${e}') }])

${t()}
${a(c)}
${i(e)}

${l("Catch the Promise")}
`;const P=`
/**
 * A Promise produces a value in the future
 * If a Promise failed, it will produce a rejected value
 */

const key = get('key')[0]

// example of failed Promise
const examplePromise = Promise.reject('some value')
examplePromise.catch((value) => {
  console.log(value)
  key.password = value
})

// set \`key.password\` to the rejected value of \`key.promise\`
console.log('is promise?', isPromise(key.promise))

function isPromise(value) {
  return value instanceof Promise
}
`;export{c as level,u as prescript,P as script,d as title};
