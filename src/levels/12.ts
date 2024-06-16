import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 12
export const title = 'Template Literals'
export const hint = '"hash": "${hash}"'

const hash = Array(10)
  .fill(undefined)
  .map(() => '286755fad04869ca523320acce0dc6a4')
  .join('')

const password = `
{
  "level": ${level},
  "hash": "${hash}"
}
`

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({ pos: 'center()', obj: JSON.stringify({ password, hash }) })}

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Multiline password')}
`

export const script = `
/**
 * A template literal allows variables to be interpolated in a string
 */

const key = get('key')[0]

const level = ${level}
const hash = key.hash

// pass in hash
const password = \`
{
  "level": $\{level},
  "hash": ""
}
\`

key.password = password
`
