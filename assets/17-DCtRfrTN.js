import{r as e,s as t}from"./sprites-BBwFSzAc.js";import{t as n}from"./texts-BNBRxv-Z.js";import{i as r,r as i}from"./index-ByB9seIk.js";var a=17,o=`setTimeout`,s=`2nd argument of setTimeout() is delay in ms`,c=`
${t()}
${e({pos:`center()`})}

${i()}
${r(17)}

${n(`How to not wait?`)}
`,l=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), area(), 'exit'])
}, 5 * MINUTE)
`;export{s as hint,a as level,c as prescript,l as script,o as title};