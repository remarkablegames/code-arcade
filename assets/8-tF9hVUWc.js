import{a as e,b as o,j as t,c as s}from"./sprites-D-jmo7he.js";import"./index-BuzeCisW.js";import{a as r}from"./texts-D4Uwcsjn.js";const a=8;const p="Objects";const l="Change the coordinates";const d=`
${e()}
${o({pos:"550, 550"})}

${t()}
${s(a)}

${r("Reposition me")}
`;const y=`
/**
 * An object is a collection of properties (key-value pairs)
 */

const coordinates = {
  x: 50,
  y: 75,
}

const player = get('player')[0]
player.pos.x = coordinates.x
player.pos.y = coordinates.y
`;export{l as hint,a as level,d as prescript,y as script,p as title};
