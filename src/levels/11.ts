import {
  addExit,
  addPlayer,
  addText,
  registerDisableMovement,
  registerWinCondition,
} from '../templates'

export const level = 11
export const title = 'Function Hoisting'

export const prescript = `
${addPlayer()}
${addExit()}

${registerDisableMovement()}
${registerWinCondition(level)}

${addText('Move at the right time')}
`

export const script = `
/**
 * Hoisting is where function declarations are moved to
 * the top of the scope before execution
 *
 * Note: hoisting does not apply to function expressions
 */

const player = get('player')[0]

player.onUpdate(() => movePlayer())

function movePlayer() {
  player.move(velocityX, velocityY)
}

const velocityX = 0
const velocityY = 0
`

export const postscript = `
get('player')[0]?.moveTo(40, 70)
const exit = get('exit')[0]

const x = 40
const y = 560
const duration = 3

if (exit) {
  exit.moveTo(x, y)
  addTween()
}

async function addTween() {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    await tween(exit.pos, vec2(width() - x, y), duration, (pos) => (exit.pos = pos))
    await tween(exit.pos, vec2(x, y), duration, (pos) => (exit.pos = pos))
  }
}
`
