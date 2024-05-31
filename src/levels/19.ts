import {
  addText,
  loadExit,
  loadKey,
  loadPlayer,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 19
export const title = 'Fullfilled Promise'

const password = btoa(String(Date.now()))

export const prescript = `
${loadPlayer()}
${loadExit()}
${loadKey()}

add([sprite('player'), pos(100, 100), area(), 'player'])
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

// example of a successful Promise
const examplePromise = Promise.resolve('some value')
examplePromise.then((value) => {
  console.log(value)
})

// set \`key.password\` to the resolved value of \`key.promise\`
console.log('is promise?', key.promise instanceof Promise)
`
