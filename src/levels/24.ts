import { password } from '../../public/data/password.json'
import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 24
export const title = 'fetch'
export const hint = 'Google JavaScript Fetch API'

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({
  pos: 'center()',
  obj: JSON.stringify({ password }),
})}

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Fetch the password')}
`

export const script = `
/**
 * fetch() makes a request for a resource
 */

const key = get('key')[0]

// GET the password from "/data/password.json"
let password

key.password = password
`
