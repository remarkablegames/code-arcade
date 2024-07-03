import {
  addExit,
  addPlayer,
  addText,
  registerDisableMovement,
  registerWinCondition,
} from '../templates'

export const level = 9
export const title = 'Functions'
export const hint = 'Edit the values in player.move(...)'

export const prescript = `
${addPlayer()}
${addExit({ pos: 'center().x, 550' })}

${registerDisableMovement()}
${registerWinCondition(level)}

${addText('Move me')}
`

export const script = `
/**
 * A function is a block of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`

export const postscript = `
get('player')[0]?.moveTo(50, 75)
`
