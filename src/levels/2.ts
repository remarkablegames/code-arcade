import {
  addExit,
  addText,
  loadPlayer,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 2
export const title = 'Multi-line Comments'

export const prescript = `
${loadPlayer()}
${addExit({ pos: 'center()' })}
${registerWinCondition(level)}
${addText('Uncomment the player')}
`

export const script = `
// Multi-line comments start with /* and end with */

/*
add([
  sprite('player'),
  pos(50, 50),
  area(),
  'player',
])
*/
`

export const postscript = `
${registerPlayerMovement()}
`
