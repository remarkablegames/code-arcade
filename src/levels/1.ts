import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 1
export const title = 'Comments'

export const prescript = `
${loadPlayer}
${loadExit}

const player = add([sprite('player'), pos(50, 50), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}

add([text("Where's the exit?")])
`

export const script = `
/**
 * Single line comments start with two forward slashes //
 */

// add([sprite('exit'), pos(center()), area(), 'exit'])

/*
debug.inspect = true
*/
`
