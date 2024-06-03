import{a as e,b as o,k as t,c as s}from"./sprites-B7_9a9v4.js";import"./index-B9iPS959.js";import{a as r}from"./texts-D4Uwcsjn.js";const a=8;const p="Objects";const l="Change the coordinates";const d=`
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
