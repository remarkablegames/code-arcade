import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 9
export const title = 'For Loop'

const password = Array.from(Array(42).keys())
  .map(() => 'answer')
  .join('')

export const prescript = `
${loadPlayer}
${loadExit}
loadSprite('key', 'sprites/key.png')

const player = add([sprite('player'), pos(100, 100), area(), 'player'])

add([sprite('key'), pos(center()), area(), 'key', { password: '${password}' }])

${registerPlayerKeys()}
${registerWinCondition}

onCollide('key', 'player', (key) => {
  if (key.password === '${password}') {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

add([text('Another password?')])
`

export const script = `
/**
 * For loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`
