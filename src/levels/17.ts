import {
  addExit,
  addPlayer,
  addText,
  loadBlock,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 17
export const title = 'Methods'
export const hint = 'Call the methods in a for loop'

export const prescript = `
${loadBlock()}
${addPlayer({ pos: '95, 100' })}
${addExit()}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Exit the maze')}

const player = get('player')[0]
player.moveTo = () => {}

const map = [
  '#########',
  '#       #',
  '####### #',
  '#       #',
  '# #######',
  '#       #',
  '####### #',
  '#       #',
  '#########',
]

const level = addLevel(map, {
  tileWidth: 64,
  tileHeight: 64,
  tiles: {
    '#': () => [
      sprite('block'),
      area(),
      body({ isStatic: true }),
    ],
  }
})
`

export const script = `
/**
 * A method is a function defined within an object
 */

const player = get('player')[0]
const SPEED = 300

player.moveUp = function() { this.move(0, -SPEED) }
player.moveLeft = function() { this.move(-SPEED, 0) }
player.moveDown = function() { this.move(0, SPEED) }
player.moveRight = function() { this.move(SPEED, 0) }

player.moveRight()
`

export const postscript = `
const exit = get('exit')[0]
if (exit) {
  exit.moveTo(95, 480)
}
`
