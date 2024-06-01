import{a as t,b as e,r as i,c as o}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a as r}from"./texts-D4Uwcsjn.js";const s=15;const d="setInterval";const l=`
${t({pos:"center()"})}
${e()}

${i(50)}
${o(s)}

${r("Exit in a loop")}
`;const p=`
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
`;export{s as level,l as prescript,p as script,d as title};
