import {
  addPlayer,
  addText,
  loadExit,
  loadKey,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 19
export const title = 'Fullfilled Promise'
export const hint = 'key.promise.then(...)'

const password = btoa(String(Date.now()))

export const prescript = `
${loadExit()}
${loadKey()}

${addPlayer({ pos: '100, 100' })}
add([sprite('key'), pos(center()), area(), 'key', { promise: Promise.resolve('${password}') }])

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

// example of successful Promise
const examplePromise = Promise.resolve('some value')
examplePromise.then((value) => {
  console.log(value)
  key.password = value
})

// set \`key.password\` to the resolved value of \`key.promise\`
console.log('is promise?', isPromise(key.promise))

function isPromise(value) {
  return value instanceof Promise
}
`
