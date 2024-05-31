import {
  addText,
  loadExit,
  loadKey,
  loadPlayer,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 11
export const title = 'For Loop'

const password = Array.from(Array(42).keys())
  .map(() => 'answer')
  .join('')

export const prescript = `
${loadPlayer()}
${loadExit()}
${loadKey()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: '${password}' }])

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Repeat the password')}
`

export const script = `
/**
 * A for loop repeats a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`
