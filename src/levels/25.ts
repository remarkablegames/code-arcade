import {
  addKey,
  addPlayer,
  addText,
  loadExit,
  registerPasswordCheck,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 25
export const title = 'Async/await'
export const hint = 'Google Async/await'

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

${addText('Bye Bye Bye')}
`

export const script = `
/**
 * \`await\` pauses an async function execution and
 * waits for a Promise to resolve before continuing
 */

const key = get('key')[0]

async function main() {
  // password = resolved or rejected value of \`key.promise\`
  let password
  key.password = password
}

main()
`
