import { addExit, addPlayer, addText, registerWinCondition } from '../templates'

export const level = 9
export const title = 'Functions'

export const prescript = `
${addPlayer()}
${addExit({ pos: 'center().x, 550' })}

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${registerWinCondition(level)}

${addText('Move me')}
`

export const script = `
/**
 * A function is a block of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`

export const postscript = `
get('player')[0].moveTo(50, 75)
`
