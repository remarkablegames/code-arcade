const audio = new Audio('sounds/score.mp3')

/**
 * Attaches click listeners to "Run" buttons.
 *
 * @param callback - Callback.
 */
export function addEventListeners(callback: () => void) {
  const buttons = document.querySelectorAll(
    'main button',
  ) as NodeListOf<HTMLButtonElement>

  buttons.forEach((button) => {
    button.onclick = () => {
      audio.play()
      callback()
    }
  })
}
