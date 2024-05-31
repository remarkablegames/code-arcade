import{l as e,a as t,r,b as a}from"./sprites-2V4iAjb-.js";import{a as o}from"./texts-qyIFEy4l.js";import"./index-BaUw5eD3.js";const s=6;const p="Booleans";const d=`
${e()}
${t()}

add([sprite('player'), pos(center()), area(), 'player'])

${r()}
${a(s)}

${o("Exit is not truthy")}
`;const c=`
/**
 * A boolean can either be true or false
 */

if (false) {
  add([
    sprite('exit'),
    area(),
    'exit',
  ])
}
`;export{s as level,d as prescript,c as script,p as title};
