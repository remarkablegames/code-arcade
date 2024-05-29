import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 12
export const title = 'setTimeout'

export const prescript = `
${loadPlayer}
${loadExit}

const player = add([sprite('player'), pos(50, 50), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}

add([text('Wait for the exit')])
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
