import type { GameObj } from 'kaboom'

// pixels per second
const SPEED = 320

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addCursorKeys(player: GameObj<any>) {
  onKeyDown('left', () => {
    player.move(-SPEED, 0)
  })

  onKeyDown('right', () => {
    player.move(SPEED, 0)
  })

  onKeyDown('up', () => {
    player.move(0, -SPEED)
  })

  onKeyDown('down', () => {
    player.move(0, SPEED)
  })
}
