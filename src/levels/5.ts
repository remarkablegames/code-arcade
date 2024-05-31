import {
  addText,
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 5
export const title = 'Numbers'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(500, 500), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}

${addText('Exit is not in view?')}
`

export const script = `
/**
 * A number represents floating-point digits like 42 or -13.37
 */

add([
  sprite('exit'),
  area(),
  'exit',
  pos(-9999, -9999),
])
`
