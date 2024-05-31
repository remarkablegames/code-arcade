import {
  addPlayer,
  addText,
  loadExit,
  loadKey,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 17
export const title = 'JSON.stringify'

const password = JSON.stringify({ level, year: new Date().getFullYear() })

export const prescript = `
${loadExit()}
${loadKey()}

${addPlayer({ pos: '100, 100' })}
add([sprite('key'), pos(center()), area(), 'key', { password: '${password}' }])

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
