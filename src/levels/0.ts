import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 0
export const title = 'Hello, World!'

export const prescript = `
${loadPlayer()}
${loadExit()}

const player = add([sprite('player'), pos(50, 50), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}

add([sprite('exit'), pos(500, 500), area(), 'exit'])
add([text('WASD or arrow keys to move')])
`

export const script = `
// press "Run" button to see the log
console.log('Hello, World!')
`
