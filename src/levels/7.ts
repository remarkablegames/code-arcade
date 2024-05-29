import { loadExit, loadPlayer, registerWinCondition } from '../templates'

export const level = 7
export const title = 'Functions'

export const prescript = `
${loadPlayer}
${loadExit}

add([sprite('player'), pos(0, 36), area(), 'player'])
add([sprite('exit'), pos(center().x, 500), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${registerWinCondition}

add([text('Move me')])
`

export const script = `
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]
player.move(0, 0)

function movePlayer() {
  // how can we move the player?
}

player.onUpdate(() => movePlayer())
`

export const postscript = `
get('player')[0].moveTo(0, 36)
`
