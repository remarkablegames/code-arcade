import {
  addPlayer,
  addText,
  loadExit,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 1
export const title = 'Single-line comments'

export const prescript = `
${addPlayer({ pos: '50, 100' })}
${loadExit()}

${registerPlayerMovement()}
${registerWinCondition(level)}

${addText('Uncomment the exit')}
`

export const script = `
// A single-line comment starts with 2 forward slashes

// console.log('This is commented out')
console.log('This is not commented out')

// add([sprite('exit'), pos(center()), area(), 'exit'])
`
