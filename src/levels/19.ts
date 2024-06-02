import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 19
export const title = 'JSON.stringify'
export const hint = '{ level: _, year: _ }'

const password = JSON.stringify({ level, year: new Date().getFullYear() })

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({ pos: 'center()', obj: JSON.stringify({ password }) })}

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Stringify the password')}
`

export const script = `
/**
 * JSON.stringify() converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing "level" and "year"
let password

key.password = password
`
