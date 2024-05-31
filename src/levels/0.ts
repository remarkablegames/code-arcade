import {
  addExit,
  addPlayer,
  addText,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 0
export const title = 'console.log'

export const prescript = `
${addPlayer({ pos: '50, 150' })}
${addExit({ pos: '500, center().y' })}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('WASD or arrow keys to move')}
add([text('Goal: reach the exit'), pos(0, 64), color(0, 0, 0)])
`

export const script = `
/**
 * console.log() outputs a message to the console
 */

// change the message below and press "Run"
console.log('Hello, World!')
`
