export function addEventListeners(callback: () => void) {
  const buttons = document.querySelectorAll(
    '.run',
  ) as NodeListOf<HTMLButtonElement>

  buttons.forEach((oldButton) => {
    const newButton = oldButton.cloneNode(true) as HTMLButtonElement
    newButton.addEventListener('click', callback)
    oldButton.parentNode?.replaceChild(newButton, oldButton)
  })

  window.onerror = (message) => {
    wait(0, () => {
      debug.log(message)
    })
  }
}
