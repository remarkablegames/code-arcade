import{l as t,a as e,r as o,c as s}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as i}from"./texts-D4Uwcsjn.js";const r=17;const m="setTimeout";const d="2nd argument of setTimeout() is delay in ms";const p=`
${t()}
${e({pos:"center()"})}

${o()}
${s(r)}

${i("How to not wait?")}
`;const l=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), area(), 'exit'])
}, 5 * MINUTE)
`;export{d as hint,r as level,p as prescript,l as script,m as title};
