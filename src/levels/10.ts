import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 10
export const title = 'Variables'

const password = (new Date().getFullYear() + level) * 31337

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({ pos: 'center()', obj: JSON.stringify({ password }) })}

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Update password & go to key')}
`

export const script = `
/**
 * A variable stores data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`
