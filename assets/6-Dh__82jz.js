import{a as t,l as e,r as o,c as r}from"./sprites-Dk09a4Sc.js";import"./index-DHW99aeY.js";import{a as s}from"./texts-D4Uwcsjn.js";const a=6;const p="Booleans";const c="What's the opposite of false?";const d=`
${t({pos:"center()"})}
${e()}

${o()}
${r(a)}

${s("Exit is not truthy")}
`;const f=`
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
`;export{c as hint,a as level,d as prescript,f as script,p as title};
