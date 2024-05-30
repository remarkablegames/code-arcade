import{l as a,a as e,r as t,b as r}from"./sprites-DIKLQSSL.js";import{a as s}from"./texts-qyIFEy4l.js";import"./index-U8zA4yR0.js";const p=6;const l="Arrays";const n=`
${a()}
loadSprite('wall', 'sprites/steel.png')
${e()}

add([sprite('player'), pos(center()), area(), body(), 'player'])
add([sprite('exit'), pos(500, 500), area(), 'exit'])

${t()}
${r(p)}

${s("Trapped in arrays")}

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
`;const c=`
addLevel(get('map')[0].map, {
  tileWidth: 64,
  tileHeight: 64,
  pos: vec2(64, 64),
  tiles: {
    '#': () => [
      sprite('wall'),
      area(),
      body({ isStatic: true }),
    ],
  }
})
`;export{p as level,c as postscript,n as prescript,m as script,l as title};
