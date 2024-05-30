import {
  addText,
  loadExit,
  loadKey,
  loadPlayer,
  registerPasswordCheck,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 10
export const title = 'Variables'

const password = (new Date().getFullYear() + level) * 31337

export const prescript = `
${loadPlayer()}
${loadExit()}
${loadKey()}

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: ${password} }])

${registerPlayerKeys()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Update password & go to key')}
`

export const script = `
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`
