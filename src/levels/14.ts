import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 14
export const title = 'setInterval'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(center()), area(), anchor('center'), 'player'])
${registerPlayerKeys(50)}

const exit = add([
  sprite('exit'),
  pos(),
  area(),
  anchor('center'),
  'exit',
])

${registerWinCondition(level)}

add([text('Exit in a loop')])
`

export const script = `
/**
 * setInterval() calls a function at specified intervals
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000

const exit = get('exit')[0]

setInterval(() => {
  exit.moveTo(
    randi(width()),
    randi(height()),
  )
}, SECOND)
`
