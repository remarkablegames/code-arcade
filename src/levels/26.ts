import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 26
export const title = 'Promise methods'
export const hint = 'key.promise.then(...).catch(...)'

const password = Date.now()

export const prescript = `
${loadExit()}

${addPlayer({ pos: '100, 100' })}
${addKey({
  pos: 'center()',
  obj: `{ promise: randi(2) ? Promise.resolve(${password}) : Promise.reject(${password}) }`,
})}

${registerPlayerMovement()}
${registerWinCondition(level)}
${registerPasswordCheck(password)}

${addText('then or catch')}
`

export const script = `
const key = get('key')[0]

// set \`key.password\` to the resolved or rejected value of \`key.promise\`
key.promise
`
