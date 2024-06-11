import {
  addExit,
  addPlayer,
  addText,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 0
export const title = 'console.log'
export const hint = 'Press the door'

export const prescript = `
${addPlayer({ pos: '50, center().y' })}
${addExit({ pos: 'width() - 50, center().y' })}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('WASD or arrow keys to move')}
`

export const script = `
/**
 * console.log() outputs a message to the console
 */

// change the message below and press "Run"
console.log('Hello, World!')
`
