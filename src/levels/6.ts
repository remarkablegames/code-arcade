import {
  addPlayer,
  addText,
  loadExit,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 6
export const title = 'Booleans'
export const hint = "What's the opposite of false?"

export const prescript = `
${addPlayer({ pos: 'center()' })}
${loadExit()}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Exit is not truthy')}
`

export const script = `
/**
 * A boolean can either be true or false
 */

if (false) {
  add([
    sprite('exit'),
    area(),
    'exit',
  ])
}
`
