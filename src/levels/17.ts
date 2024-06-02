import {
  addExit,
  addPlayer,
  addText,
  loadBlock,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 17
export const title = 'Properties'
export const hint = "Edit the body's mass"

const mass = 1000

export const prescript = `
${loadBlock()}
${addPlayer({ pos: '95, 100' })}
${addExit()}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Sokoban')}

const player = get('player')[0]
player.moveTo = () => {}

const map = [
  '###########',
  '###########',
  '##       ##',
  '######## ##',
  '##       ##',
  '###########',
  '##     ####',
  '## ####  ##',
  '##    #  ##',
  '###########',
  '###########',
]

const tileSize = 64

const level = addLevel(map, {
  tileWidth: tileSize,
  tileHeight: tileSize,
  pos: vec2(-tileSize, -tileSize),
  tiles: {
    '#': () => [
      sprite('block'),
      area(),
      body({ mass: ${mass} }),
      'block'
    ],
  }
})

onUpdate(() => {
  level.get('block').forEach((block) => {
    if (block.mass < 1) {
      throw new Error('Block mass cannot be less than 1')
    }
  })
})
`

export const script = `
/**
 * A property is an association between an object key and its value
 */

onCollide('block', 'player', (block) => {
  block.mass = ${mass}
})
`

export const postscript = `
const exit = get('exit')[0]
if (exit) {
  exit.moveTo(480, 480)
}
`
