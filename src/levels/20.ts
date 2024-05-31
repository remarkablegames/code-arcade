import {
  addText,
  loadExit,
  loadKey,
  loadPlayer,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 20
export const title = 'Rejected Promise'

const password = btoa(String(Date.now()))

export const prescript = `
${loadPlayer()}
${loadExit()}
${loadKey()}

add([sprite('player'), pos(100, 100), area(), 'player'])
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

// example of a failed Promise
const examplePromise = Promise.reject('some value')
examplePromise.catch((value) => {
  console.log(value)
})

// set \`key.password\` to the rejected value of \`key.promise\`
console.log('is promise?', key.promise instanceof Promise)
`
