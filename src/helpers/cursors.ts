import type { GameObj } from 'kaboom'

// pixels per second
const SPEED = 320

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addCursorKeys(player: GameObj<any>) {
  return onKeyDown((key) => {
    switch (key) {
      case 'up':
      case 'w':
        player.move(0, -SPEED)
        break

      case 'left':
      case 'a':
        player.move(-SPEED, 0)
        break

      case 'down':
      case 's':
        player.move(0, SPEED)
        break

      case 'right':
      case 'd':
        player.move(SPEED, 0)
        break
    }
  })
}
