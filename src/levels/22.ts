import {
  addPlayer,
  addText,
  loadExit,
  loadKey,
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
${loadKey()}

${addPlayer({ pos: '100, 100' })}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.reject('${password}') }])

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('Catch the Promise')}
`

export const script = `
/**
 * A Promise produces a value in the future
 * If a Promise failed, it will produce a rejected value
 */

const key = get('key')[0]

// example of failed Promise
const examplePromise = Promise.reject('some value')
examplePromise.catch((value) => {
  console.log(value)
  key.password = value
})

// set \`key.password\` to the rejected value of \`key.promise\`
console.log('is promise?', isPromise(key.promise))

function isPromise(value) {
  return value instanceof Promise
}
`
