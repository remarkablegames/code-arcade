import {
  addPlayer,
  loadExit,
  loadKey,
  loadSignal,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 16
export const title = 'Repetition is key'

export const prescript = `
${loadExit()}
${loadKey()}
${loadSignal()}

${addPlayer({ pos: 'center()' })}

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

${registerPlayerMovement()}
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
 * Can we speed things up?
 */

const player = get('player')[0]
const key = get('key')[0]
// player.moveTo(key.pos)
`
