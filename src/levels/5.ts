import {
  addPlayer,
  addText,
  loadExit,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 5
export const title = 'Numbers'
export const hint = 'Change the coordinates'

export const prescript = `
${addPlayer({ pos: '500, 500' })}
${loadExit()}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Exit not in view?')}
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
