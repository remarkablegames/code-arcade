import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 3
export const title = 'Errors'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(50, 50), area(), 'player'])
add([sprite('exit'), pos(center()), area(), 'exit'])

${registerWinCondition(level)}
`

export const script = `
/**
 * Errors interfere with the execution of the program
 */

onUpdate(() => {
  throw new Error('Remove the error')
})

`

export const postscript = `
${registerPlayerKeys()}
`
