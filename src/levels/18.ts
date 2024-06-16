import {
  addPlayer,
  loadExit,
  loadKey,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 18
export const title = 'Repetition is key'
export const hint = 'Use setInterval()'

export const prescript = `
${loadExit()}
${loadKey()}

${addPlayer({ pos: 'center()' })}

let keys = 420

const getMessage = () => 'Collect ' + keys + ' more key' + (keys !== 1 ? 's' : '')

add([rect(width(), 32), color(0, 0, 0), z(100)])
const message = add([text(getMessage()), z(100)])

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

function collectKey() {
  const player = get('player')[0]
  const key = get('key')[0]
  key && player.moveTo(key.pos)
}
`
