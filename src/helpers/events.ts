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

  buttons.forEach((oldButton) => {
    const newButton = oldButton.cloneNode(true) as HTMLButtonElement
    newButton.addEventListener('click', () => {
      audio.play()
      callback()
    })
    oldButton.parentNode?.replaceChild(newButton, oldButton)
  })
}
