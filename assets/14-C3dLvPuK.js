import{l as t,a as e,r as o,c as s}from"./sprites-M-owXaHm.js";import"./index-7cZA0KuL.js";import{a as i}from"./texts-qyIFEy4l.js";const r=14;const p="setTimeout";const m=`
${t()}
${e({pos:"100, 100"})}

${o()}
${s(r)}

${i("Wait for the exit")}
`;const d=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`;export{r as level,m as prescript,d as script,p as title};
