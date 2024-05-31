import {
  addExit,
  addPlayer,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 3
export const title = 'Errors'

export const prescript = `
${addPlayer({ pos: '50, 100' })}
${addExit({ pos: 'center()' })}
${registerWinCondition(level)}
${registerPlayerMovement()}
`

export const script = `
/**
 * Errors interfere with the execution of the program
 */

throw new Error('Remove the error')
`
