import {
  addExit,
  addPlayer,
  addText,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 17
export const title = 'setInterval'
export const hint = '2nd argument of setInterval() is delay in ms'

export const prescript = `
${addPlayer({ pos: 'center()' })}
${addExit()}

${registerPlayerMovement(50)}
${registerWinCondition(level)}

${addText('Exit in a loop')}
`

export const script = `
/**
 * setInterval() calls a function at specified periods
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000

const exit = get('exit')[0]

setInterval(() => {
  exit.moveTo(
    randi(width()),
    randi(height()),
  )
}, 2 * SECOND)
`
