import {
  addExit,
  addPlayer,
  addText,
  loadBlock,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 7
export const title = 'Arrays'

export const prescript = `
${loadBlock()}
${addPlayer({ pos: 'center()' })}
${addExit({ pos: '550, 550' })}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Trapped in arrays')}

onUpdate(() => {
  const map = get('map')[0]
  if (!map?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`

export const script = `
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
`

export const postscript = `
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
`
