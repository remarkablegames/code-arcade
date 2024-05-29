/**
 * Creates cursor keys for player.
 *
 * @param speed - Pixels per second.
 * @returns - Game script.
 */
export const registerPlayerKeys = (speed = 320) => `
onKeyDown((key) => {
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
`

/**
 * Registers event listener for beating the level.
 *
 * @param level - Current level.
 * @returns - Game script.
 */
export const registerWinCondition = (level: number) => `
onCollide('player', 'exit', () => {
  parent.postMessage({
    source: ${JSON.stringify(import.meta.env.VITE_APP_NAME)},
    level: ${level + 1},
  })
})
`
