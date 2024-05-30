import{l as e,a as t,r as s,b as r}from"./sprites-CqAi-61g.js";import"./index-BZnxxq9W.js";const i=13;const n="setTimeout";const c=`
${e()}
${t()}

add([sprite('player'), pos(50, 50), area(), 'player'])

${s()}
${r(i)}

add([text('Wait for the exit')])
`;const p=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`;export{i as level,c as prescript,p as script,n as title};
