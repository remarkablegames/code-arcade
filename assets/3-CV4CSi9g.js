import{l as e,a as r,r as t,b as s}from"./sprites-uUyKPnYV.js";import"./index-DhYtdT-E.js";const i=3;const p="Numbers";const n=`
${e()}
${r()}

const player = add([sprite('player'), pos(500, 500), area(), 'player'])

${t()}
${s(i)}

add([text('Exit is not in view?')])
`;const l=`
/**
 * Numbers represent floating-point numbers like 42 or -13.37
 */

add([
  sprite('exit'),
  area(),
  'exit',
  pos(-9999, -9999),
])
`;export{i as level,n as prescript,l as script,p as title};
