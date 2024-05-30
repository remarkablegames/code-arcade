import{l as a,a as t,g as e,r,b as s}from"./sprites-COPK4Gqt.js";import{a as o}from"./texts-qyIFEy4l.js";import"./index-DN4CyoXJ.js";const p=6;const n="Arrays";const c=`
${a()}
${t()}
${e()}

add([sprite('player'), pos(center()), area(), body(), 'player'])
add([sprite('exit'), pos(500, 500), area(), 'exit'])

${r()}
${s(p)}

${o("Trapped in arrays")}

onUpdate(() => {
  const map = get('map')[0]
  if (!map?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`;const m=`
/**
 * Arrays are an ordered list of data
 */

const map = [
  '#######',
  '#     #',
  '#     #',
  '#     #',
  '#     #',
  '#######',
]

add(['map', { map }])
`;const y=`
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
`;export{p as level,y as postscript,c as prescript,m as script,n as title};
