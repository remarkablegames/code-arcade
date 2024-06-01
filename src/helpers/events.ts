const audio = new Audio('sounds/score.mp3')

type Callback = () => void

/**
 * Attaches click listeners to "Run" and "Hint" buttons.
 *
 * @param runCallback - Run callback.
 * @param hintCallback - Hint callback.
 */
export function addEventListeners(
  runCallback: Callback,
  hintCallback: Callback,
) {
  const runButtons = document.querySelectorAll(
    'main .btn-primary',
  ) as NodeListOf<HTMLButtonElement>

  runButtons.forEach((runButton) => {
    runButton.onclick = () => {
      audio.play()
      runCallback()
    }
  })

  const hintButtons = document.querySelectorAll(
    'main .btn-secondary',
  ) as NodeListOf<HTMLButtonElement>

  hintButtons.forEach((hintButton) => {
    hintButton.onclick = () => {
      audio.play()
      hintCallback()
    }
  })
}
