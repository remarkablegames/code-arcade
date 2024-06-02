import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 22
export const title = 'Rejected Promise'
export const hint = 'key.promise.catch(...)'

const password = btoa(String(Date.now()))

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({
  pos: 'center()',
  obj: `{ promise: Promise.reject('${password}') }`,
})}

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Catch the Promise')}

window.isPromise = (value) => value instanceof Promise
`

export const script = `
/**
 * A Promise produces a value in the future
 * If a Promise failed, it will produce a rejected value
 */

const key = get('key')[0]

// set \`key.password\` to the rejected value of \`key.promise\`
key.promise
`
