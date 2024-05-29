import{l as e,a,r as t,b as r}from"./sprites-Bgw52aqI.js";const s=5;const i="Arrays";const o=`
${e()}
loadSprite('wall', 'sprites/steel.png')
${a()}

const player = add([sprite('player'), pos(center()), area(), body(), 'player'])
add([sprite('exit'), pos(500, 500), area(), 'exit'])

${t()}
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
`;const d=`
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
`;export{s as level,d as postscript,o as prescript,l as script,i as title};
