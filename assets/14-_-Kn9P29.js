import{l as t,a as e,r,b as a}from"./sprites-6a5ZWd5c.js";import{a as i}from"./texts-qyIFEy4l.js";import"./index-DLb_gdsO.js";const s=14;const l="setInterval";const p=`
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

${a(s)}

${i("Exit in a loop")}
`;const d=`
/**
 * setInterval() calls a function at specified intervals
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
`;export{s as level,p as prescript,d as script,l as title};
