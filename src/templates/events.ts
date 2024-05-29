import { getData } from '../helpers'
import { Data } from '../types'

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

export const registerWinCondition = `
onCollide('player', 'exit', () => {
  parent.postMessage({
    source: ${JSON.stringify(import.meta.env.VITE_APP_NAME)},
    level: ${Number(getData(Data.level)) + 1},
  })
})
`
