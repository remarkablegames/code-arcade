import{l as t,a as e,b as r,r as a}from"./sprites-CZYdguN4.js";import"./index-x1ppZCB-.js";const s=14;const n="setInterval";const c=`
${t()}
${e()}

const player = add([sprite('player'), pos(50, 80), area(), anchor('center'), 'player'])

const exit = add([
  sprite('exit'),
  pos(center()),
  area(),
  anchor('center'),
  'exit',
])

${r(s)}

add([text('Exit in a loop')])
`;const l=`
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
`;const p=`
const player = get('player')[0]
${a(50)}
`;export{s as level,p as postscript,c as prescript,l as script,n as title};
