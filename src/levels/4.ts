import {
  loadExit,
  loadPlayer,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 4
export const title = 'Strings'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(center()), area(), 'player'])

${registerPlayerMovement()}
${registerWinCondition(level)}
`

export const script = `
/**
 * A string is text inside single or double quotes
 */

const exit = 'exite'

add([
  sprite(exit),
  area(),
  "exit",
])
`
