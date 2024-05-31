import{l as t,a as e,r,b as a}from"./sprites-Bi3WeMWQ.js";import{a as i}from"./texts-qyIFEy4l.js";import"./index-lv7y_SZO.js";const o=15;const l="setInterval";const p=`
${t()}
${e()}

add([sprite('player'), pos(center()), area(), anchor('center'), 'player'])
${r(50)}

const exit = add([
  sprite('exit'),
  pos(),
  area(),
  anchor('center'),
  'exit',
])

${a(o)}

${i("Exit in a loop")}
`;const d=`
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
}, SECOND)
`;export{o as level,p as prescript,d as script,l as title};
