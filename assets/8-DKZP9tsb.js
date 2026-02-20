import{a as e,b as o,d as t,c as s}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as r}from"./texts-D4Uwcsjn.js";const a=8;const p="Objects";const d="Change the coordinates";const l=`
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
`;export{d as hint,a as level,l as prescript,y as script,p as title};
