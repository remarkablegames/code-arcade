import {
  addText,
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 5
export const title = 'Booleans'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(center()), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}

${addText('Exit is not truthy')}
`

export const script = `
/**
 * Booleans can either be true or false
 */

if (false) {
  add([
    sprite('exit'),
    area(),
    'exit',
  ])
}
`
