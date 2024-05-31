import{l as a,a as t,g as e,r,b as s}from"./sprites-DHOrPU-j.js";import{a as p}from"./texts-qyIFEy4l.js";import"./index-kkyszdDf.js";const o=7;const m="Arrays";const n=`
${a()}
${t()}
${e()}

add([sprite('player'), pos(center()), area(), body(), 'player'])
add([sprite('exit'), pos(500, 500), area(), 'exit'])

${r()}
${s(o)}

${p("Trapped in arrays")}

onUpdate(() => {
  const map = get('map')[0]
  if (!map?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`;const c=`
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
`;export{o as level,y as postscript,n as prescript,c as script,m as title};
