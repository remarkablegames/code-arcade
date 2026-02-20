import{a as t,l as e,r as i,c as r}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as o}from"./texts-D4Uwcsjn.js";const s=5;const d="Numbers";const c="Change the coordinates";const l=`
${t({pos:"500, 500"})}
${e()}

${i()}
${r(s)}

${o("Exit not in view?")}
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
`;export{c as hint,s as level,l as prescript,m as script,d as title};
