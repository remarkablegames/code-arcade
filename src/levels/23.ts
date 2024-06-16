import { addExit, addPlayer, addText, registerWinCondition } from '../templates'

export const level = 23
export const title = 'addEventListener'
export const hint = "addEventListener('click', callback)"

export const prescript = `
${addPlayer({ pos: '50, 100' })}
${addExit({ pos: 'center()' })}

${registerWinCondition(level)}

onKeyPress(() => {
  debug.log('Key press disabled!')
})

${addText('Listen to click')}
`

export const script = `
/**
 * addEventListener() allows you to add an event handler
 */

const player = get('player')[0]
const event = ''

function callback() {
  player.moveTo(mousePos())
}

addEventListener(event, null)
`
