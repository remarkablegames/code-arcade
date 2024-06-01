import {
  addPlayer,
  addText,
  loadExit,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 14
export const title = 'setTimeout'

export const prescript = `
${loadExit()}
${addPlayer({ pos: 'center()' })}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Wait for exit?')}
`

export const script = `
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

// can we speed this up?
setTimeout(() => {
  add([sprite('exit'), area(), 'exit'])
}, 5 * MINUTE)
`
