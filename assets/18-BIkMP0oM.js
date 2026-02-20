import{a as t,b as e,r as i,c as s}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as n}from"./texts-D4Uwcsjn.js";const o=18;const d="setInterval";const l="2nd argument of setInterval() is delay in ms";const p=`
${t({pos:"center()"})}
${e()}

${i(50)}
${s(o)}

${n("Exit in a loop")}
`;const m=`
/**
 * setInterval() calls a function at specified periods
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000

const exit = get('exit')[0]

setInterval(() => {
  exit.moveTo(
    randi(width()),
    randi(height()),
  )
}, 2 * SECOND)
`;export{l as hint,o as level,p as prescript,m as script,d as title};
