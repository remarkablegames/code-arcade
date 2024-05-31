import{l as e,a as r,r as t,b as i}from"./sprites-DHOrPU-j.js";import{a as s}from"./texts-qyIFEy4l.js";import"./index-kkyszdDf.js";const a=5;const l="Numbers";const d=`
${e()}
${r()}

add([sprite('player'), pos(500, 500), area(), 'player'])

${t()}
${i(a)}

${s("Exit is not in view?")}
`;const m=`
/**
 * A number represents floating-point digits like 42 or -13.37
 */

add([
  sprite('exit'),
  area(),
  'exit',
  pos(-9999, -9999),
])
`;export{a as level,d as prescript,m as script,l as title};
