import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 2
export const title = 'Strings'

export const prescript = `
${loadPlayer()}
${loadExit()}

const player = add([sprite('player'), pos(center()), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}
`

export const script = `
/**
 * Strings are text inside single or double quotes
 */

add([
  sprite('exite'),
  area(),
  "exit",
])
`
