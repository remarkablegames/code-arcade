import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 13
export const title = 'For Loop'
export const hint = "Array(42).fill().map(...).join('')"

const password = Array.from(Array(42).keys())
  .map(() => 'answer')
  .join('')

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({ pos: 'center()', obj: JSON.stringify({ password }) })}

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
