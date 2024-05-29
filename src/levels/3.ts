import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 3
export const title = 'Numbers'

export const prescript = `
${loadPlayer()}
${loadExit()}

const player = add([sprite('player'), pos(500, 500), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}

add([text('Exit is not in view?')])
`

export const script = `
/**
 * Numbers represent floating-point numbers like 42 or -13.37
 */

add([
  sprite('exit'),
  area(),
  'exit',
  pos(-9999, -9999),
])
`
