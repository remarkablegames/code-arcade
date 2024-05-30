import{l as e,a as t,r as a,b as r}from"./sprites-Byab-hWy.js";import"./index-WTQywSR1.js";const s=6;const o="Arrays";const d=`
${e()}
loadSprite('wall', 'sprites/steel.png')
${t()}

add([sprite('player'), pos(center()), area(), body(), 'player'])
add([sprite('exit'), pos(500, 500), area(), 'exit'])

${a()}
${r(s)}

add([text('Trapped in arrays')])

onUpdate(() => {
  if (!get('map')[0]?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`;const l=`
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
`;const n=`
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
`;export{s as level,n as postscript,d as prescript,l as script,o as title};
