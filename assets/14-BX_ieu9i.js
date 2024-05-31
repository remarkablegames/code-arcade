import{l as e,a as t,r as o,b as r}from"./sprites-X-fX4rmQ.js";import"./index-DrkCDwxr.js";import{a as s}from"./texts-qyIFEy4l.js";const i=14;const c="setTimeout";const l=`
${e()}
${t()}

add([sprite('player'), pos(50, 50), area(), 'player'])

${o()}
${r(i)}

${s("Wait for the exit")}
`;const m=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`;export{i as level,l as prescript,m as script,c as title};
