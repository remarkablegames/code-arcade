import { loadExit, loadPlayer, registerWinCondition } from '../templates'

export const level = 7
export const title = 'Objects'

export const prescript = `
${loadPlayer()}
${loadExit()}

const player = add([sprite('player'), pos(0, 36), area(), body(), 'player'])
add([sprite('exit'), pos(516, 516), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${registerWinCondition(level)}

add([text('Reposition me')])
`

export const script = `
/**
 * Objects are a collection of properties or key-value pairs
 */

const coordinates = {
  x: 0,
  y: 36,
}

const player = get('player')[0]
player.pos.x = coordinates.x
player.pos.y = coordinates.y
`
