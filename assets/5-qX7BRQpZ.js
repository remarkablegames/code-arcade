import{l as e,a as t,r,b as a}from"./sprites-COPK4Gqt.js";import{a as s}from"./texts-qyIFEy4l.js";import"./index-DN4CyoXJ.js";const o=5;const p="Booleans";const d=`
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
