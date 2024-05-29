import{l as e,a as t,r as a,b as r}from"./sprites-CZYdguN4.js";import"./index-x1ppZCB-.js";const s=6;const o="Arrays";const l=`
${e()}
loadSprite('wall', 'sprites/steel.png')
${t()}

const player = add([sprite('player'), pos(center()), area(), body(), 'player'])
add([sprite('exit'), pos(500, 500), area(), 'exit'])

${a()}
${r(s)}

add([text('Trapped in arrays')])

onUpdate(() => {
  if (!get('map')[0]?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`;const d=`
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
`;export{s as level,n as postscript,l as prescript,d as script,o as title};
