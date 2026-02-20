import{i as t,a,b as e,r,c as s}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as o}from"./texts-D4Uwcsjn.js";const p=7;const m="Arrays";const c="Edit the map";const l=`
${t()}
${a({pos:"center()"})}
${e({pos:"550, 550"})}

${r()}
${s(p)}

${o("Trapped in arrays")}

onUpdate(() => {
  const map = get('map')[0]
  if (!map?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`;const h=`
/**
 * An array is an ordered list of data
 */

const map = [
  '#######',
  '#     #',
  '#     #',
  '#     #',
  '#     #',
  '#######',
]

map.push(map[0])

add(['map', { map }])
`;const g=`
addLevel(get('map')[0].map, {
  tileWidth: 64,
  tileHeight: 64,
  pos: vec2(64, 64),
  tiles: {
    '#': () => [
      sprite('block'),
      area(),
      body({ isStatic: true }),
    ],
  }
})
`;export{c as hint,p as level,g as postscript,l as prescript,h as script,m as title};
