import {
  addText,
  loadExit,
  loadPlayer,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 14
export const title = 'setTimeout'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(50, 50), area(), 'player'])

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Wait for the exit')}
`

export const script = `
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`
