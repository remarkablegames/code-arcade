import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 4
export const title = 'Booleans'

export const prescript = `
${loadPlayer}
${loadExit}

const player = add([sprite('player'), pos(center()), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition}

add([text('Exit is not truthy')])
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
