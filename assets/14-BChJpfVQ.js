import{l as e,a as t,r as s,c as i}from"./sprites-DyQZo6jA.js";import"./index-Bxcebhqn.js";import{a as o}from"./texts-D4Uwcsjn.js";const r=14;const p="setTimeout";const m=`
${e()}
${t({pos:"center()"})}

${s()}
${i(r)}

${o("Wait for exit?")}
`;const d=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

// can we speed this up?
setTimeout(() => {
  add([sprite('exit'), area(), 'exit'])
}, 5 * MINUTE)
`;export{r as level,m as prescript,d as script,p as title};
