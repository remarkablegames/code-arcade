const { log } = console

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
    onLoad(() => {
      debug.log(message)
    })
  }

  // eslint-disable-next-line no-console
  console.log = (...args) => {
    log(...args)
    onLoad(() => {
      debug.log(args.join(' '))
    })
  }
}
