import {
  addText,
  loadExit,
  loadPlayer,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 6
export const title = 'Booleans'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(center()), area(), 'player'])

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
