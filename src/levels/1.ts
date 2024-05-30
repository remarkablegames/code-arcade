import {
  addText,
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 1
export const title = 'Single-line comments'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('player'), pos(50, 50), area(), 'player'])

${registerPlayerKeys()}
${registerWinCondition(level)}

${addText('Uncomment the exit')}
`

export const script = `
// Single-line comments start with 2 forward slashes

// console.log('This is commented out')
console.log('This is not commented out')

// add([sprite('exit'), pos(center()), area(), 'exit'])
`
