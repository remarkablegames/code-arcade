import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 21
export const title = 'Fullfilled Promise'
export const hint = 'key.promise.then(...)'

const password = btoa(String(Date.now()))

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({
  pos: 'center()',
  obj: `{ promise: Promise.resolve('${password}') }`,
})}

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Pass the Promise')}
`

export const script = `
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// set \`key.password\` to the resolved value of \`key.promise\`
key.promise
`
