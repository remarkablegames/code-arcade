import {
  loadExit,
  loadKey,
  loadPlayer,
  loadSignal,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 15
export const title = 'Timer'

export const prescript = `
${loadPlayer()}
${loadExit()}
${loadKey()}
${loadSignal()}

add([sprite('player'), pos(center()), area(), 'player'])

let keys = 420

const getMessage = () => 'Collect ' + keys + ' more key' + (keys !== 1 ? 's' : '')

const message = add([text(getMessage())])

function addKey() {
  add([
    sprite('key'),
    pos(randi(width()), randi(height())),
    area(),
    anchor('center'),
    'key',
  ])
}

addKey()

${registerPlayerKeys()}
${registerWinCondition(level)}

onCollide('key', 'player', (key) => {
  play('signal', { volume: 0.2, speed: 2 })
  keys--
  key.destroy()
  message.text = getMessage()

  if (keys) {
    addKey()
  } else {
    add([sprite('exit'), pos(center()), area(), 'exit'])
  }
})

onAdd('exit', () => {
  if (keys) {
    destroyAll('exit')
  }
})
`

export const script = `
/**
 * Can we speed this up?
 */

const player = get('player')[0]
const key = get('key')[0]
// player.moveTo(key.pos)
`
