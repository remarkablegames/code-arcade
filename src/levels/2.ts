import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 2
export const title = 'Multi-line comments'

export const prescript = `
${loadPlayer()}
${loadExit()}

add([sprite('exit'), pos(center()), area(), 'exit'])

${registerWinCondition(level)}

add([text('Uncomment the player')])
`

export const script = `
// Multi-line comments start with /* and end with */

/* console.log('This is commented out') */
console.log('This is not commented out')

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
const player = get('player')[0]
if (player) {
${registerPlayerKeys()}
}
`
