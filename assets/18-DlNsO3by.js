import{r as e,t}from"./sprites-BBwFSzAc.js";import{t as n}from"./texts-BNBRxv-Z.js";import{i as r,r as i}from"./index-ByB9seIk.js";var a=18,o=`setInterval`,s=`2nd argument of setInterval() is delay in ms`,c=`
${e({pos:`center()`})}
${t()}

${i(50)}
${r(18)}

${n(`Exit in a loop`)}
`,l=`
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
`;export{s as hint,a as level,c as prescript,l as script,o as title};