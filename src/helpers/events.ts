const audio = new Audio('sounds/score.mp3')

type Callback = () => void

/**
 * Attaches click listeners to "Run", "Restart", and "Hint" buttons.
 *
 * @param runCallback - Run callback.
 * @param restartCallback - Restart callback.
 * @param hintCallback - Hint callback.
 */
export function addEventListeners(
  runCallback: Callback,
  restartCallback: Callback,
  hintCallback: Callback,
) {
  const runButtons =
    document.querySelectorAll<HTMLButtonElement>('main .btn-primary')

  runButtons.forEach((runButton) => {
    runButton.onclick = () => {
      void audio.play()
      runCallback()
    }
  })

  const restartButtons =
    document.querySelectorAll<HTMLButtonElement>('main .btn-tertiary')

  restartButtons.forEach((restartButton) => {
    restartButton.onclick = () => {
      void audio.play()
      restartCallback()
    }
  })

  const hintButtons = document.querySelectorAll<HTMLButtonElement>(
    'main .btn-secondary',
  )

  hintButtons.forEach((hintButton) => {
    hintButton.onclick = () => {
      void audio.play()
      hintCallback()
    }
  })
}
