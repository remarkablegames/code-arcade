import {
  addExit,
  addPlayer,
  addText,
  registerDisableMovement,
  registerWinCondition,
} from '../templates'

export const level = 10
export const title = 'Function Expressions'
export const hint = 'Use a negative number'

export const prescript = `
${addPlayer()}
${addExit({ pos: 'center().x, 550' })}

${registerDisableMovement()}
${registerWinCondition(level)}

${addText('Move me again')}
`

export const script = `
/**
 * A function expression can omit the function name
 * to create an anonymous function
 */

const player = get('player')[0]

const movePlayer = function () {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`

export const postscript = `
get('player')[0].moveTo(width() - 50, 75)
`
