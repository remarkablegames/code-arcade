import {
  addPlayer,
  addText,
  loadExit,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 15
export const title = 'setTimeout'
export const hint = '2nd argument of setTimeout() is delay in ms'

export const prescript = `
${loadExit()}
${addPlayer({ pos: 'center()' })}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('How to not wait?')}
`

export const script = `
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), area(), 'exit'])
}, 5 * MINUTE)
`
