import{l as e,a as t,r as s,b as r}from"./sprites-BgHRVQJw.js";const o=12;const a="setTimeout";const n=`
${e}
${t}

const player = add([sprite('player'), pos(50, 50), area(), 'player'])

${s()}
${r(o)}

add([text('Wait for the exit')])
`;const c=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`;export{o as level,n as prescript,c as script,a as title};
