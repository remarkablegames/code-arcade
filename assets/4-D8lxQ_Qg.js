import{l as e,a as r,r as t,b as i}from"./sprites-CqAi-61g.js";import"./index-BZnxxq9W.js";const s=4;const p="Numbers";const n=`
${e()}
${r()}

add([sprite('player'), pos(500, 500), area(), 'player'])

${t()}
${i(s)}

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
`;export{s as level,n as prescript,l as script,p as title};
