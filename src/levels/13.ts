import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 13
export const title = 'setInterval'

export const prescript = `
${loadPlayer}
${loadExit}

const player = add([sprite('player'), pos(50, 80), area(), anchor('center'), 'player'])

const exit = add([
  sprite('exit'),
  pos(center()),
  area(),
  anchor('center'),
  'exit',
])

${registerWinCondition}

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

export const postscript = `
const player = get('player')[0]
${registerPlayerKeys(50)}
`
