import{l as e,a as t,r,b as s}from"./sprites-DHOrPU-j.js";import{a as o}from"./texts-qyIFEy4l.js";import"./index-kkyszdDf.js";const i=14;const c="setTimeout";const l=`
${e()}
${t()}

add([sprite('player'), pos(50, 50), area(), 'player'])

${r()}
${s(i)}

${o("Wait for the exit")}
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
`;export{i as level,l as prescript,d as script,c as title};
