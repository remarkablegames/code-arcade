import{l as e,a as t,r,b as a}from"./sprites-DtmJiuCK.js";import{a as s}from"./texts-qyIFEy4l.js";import"./index-CEPyo8Ci.js";const o=6;const p="Booleans";const d=`
${e()}
${t()}

add([sprite('player'), pos(center()), area(), 'player'])

${r()}
${a(o)}

${s("Exit is not truthy")}
`;const c=`
/**
 * Booleans can either be true or false
 */

if (false) {
  add([
    sprite('exit'),
    area(),
    'exit',
  ])
}
`;export{o as level,d as prescript,c as script,p as title};
