import{l as t,a as e,r,b as a}from"./sprites-Byab-hWy.js";import"./index-WTQywSR1.js";const i=14;const o="setInterval";const c=`
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

${a(i)}

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
`;export{i as level,c as prescript,l as script,o as title};
