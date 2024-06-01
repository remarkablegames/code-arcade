import{h as a,a as t,b as e,r,c as s}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a as o}from"./texts-D4Uwcsjn.js";const p=7;const n="Arrays";const c=`
${a()}
${t({pos:"center()"})}
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
`;const l=`
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

map[6] = map[0]

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
`;export{p as level,g as postscript,c as prescript,l as script,n as title};
