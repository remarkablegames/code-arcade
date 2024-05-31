import {
  addPlayer,
  addText,
  loadExit,
  loadKey,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 18
export const title = 'JSON.parse'

const password = btoa(String(Date.now()))
const passwordJSON = JSON.stringify({ password })

export const prescript = `
${loadExit()}
${loadKey()}

${addPlayer({ pos: '100, 100' })}
add([sprite('key'), pos(center()), area(), 'key', { password: '${passwordJSON}' }])

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Parse the password')}
`

export const script = `
/**
 * JSON.parse() converts string into data
 */

const key = get('key')[0]

// parse the password from \`key.password\`
console.log(key.password)
let password

key.password = password
`
