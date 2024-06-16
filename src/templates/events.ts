import { GAME_ID } from '../constants'
import { loadBlip, loadPowerup } from './sounds'

/**
 * Registers disable movement with keyboard and mouse.
 *
 * @returns - Game script.
 */
export const registerDisableMovement = () => `
onKeyPress(() => {
  debug.log('Key press disabled!')
})

onMousePress(() => {
  debug.log('Mouse press disabled!')
})
`

/**
 * Registers player movement with keyboard and mouse.
 *
 * @param speed - Pixels per second.
 * @returns - Game script.
 */
export const registerPlayerMovement = (speed = 320) => `
onKeyDown((key) => {
  const player = get('player')[0]

  if (!player) {
    return
  }

  switch (key) {
    case 'up':
    case 'w':
      player.move(0, -${speed})
      break

    case 'left':
    case 'a':
      player.move(-${speed}, 0)
      break

    case 'down':
    case 's':
      player.move(0, ${speed})
      break

    case 'right':
    case 'd':
      player.move(${speed}, 0)
      break
  }
})

onMouseDown(() => {
  get('player')[0]?.moveTo(mousePos(), ${speed})
})
`

/**
 * Registers password check.
 *
 * @param password - Password.
 * @returns - Game script.
 */
export const registerPasswordCheck = (password: string | number) => `
${loadBlip()}
${loadPowerup()}

onCollide('key', 'player', (key) => {
  const password = ${JSON.stringify(password)}

  if (key.password === password) {
    play('powerup', { volume: 0.5 })
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
    return
  }

  if (typeof key.password !== typeof password) {
    debug.log('Password should be a ' + typeof password)
  } else {
    debug.log('Incorrect password')
  }

  play('blip', { volume: 0.5 })
})
`

/**
 * Registers event listener for beating the level.
 *
 * @param level - Current level.
 * @returns - Game script.
 */
export const registerWinCondition = (level: number) => `
loadSound('exit', 'sounds/wooosh.mp3')

onCollide('player', 'exit', () => {
  play('exit')

  wait(0.2, () => {
    window.parent.postMessage({
      source: '${GAME_ID}',
      level: ${level + 1},
    })
  })
})

onAdd('player', (player) => {
  if (get('player').length > 1) {
    player.destroy()
  }
})

onAdd('exit', (exit) => {
  if (get('exit').length > 1) {
    exit.destroy()
  }
})
`
