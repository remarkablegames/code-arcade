import kaboom from 'kaboom'

import { initGameScene } from '../scenes'

export function initGame() {
  kaboom({
    width: 600,
    height: 600,
    canvas: document.querySelector('canvas')!,
  })

  initGameScene()
}
