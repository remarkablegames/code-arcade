import{h as e,i as t,m as n,n as r,t as i}from"./index--3CafFNT.js";var a=18,o=`setInterval`,s=`2nd argument of setInterval() is delay in ms`,c=`
${t({pos:`center()`})}
${r()}

${n(50)}
${e(18)}

${i(`Exit in a loop`)}
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