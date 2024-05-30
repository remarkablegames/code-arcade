import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 6
export const title = 'Arrays'

export const prescript = `
${loadPlayer()}
loadSprite('wall', 'sprites/steel.png')
${loadExit()}

add([sprite('player'), pos(center()), area(), body(), 'player'])
add([sprite('exit'), pos(500, 500), area(), 'exit'])

${registerPlayerKeys()}
${registerWinCondition(level)}

add([text('Trapped in arrays')])

onUpdate(() => {
  if (!get('map')[0]?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`

export const script = `
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
`

export const postscript = `
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
`
