import { editorView, getLevel, initKaboom, renderLevel } from '../helpers'

const buttons = document.querySelectorAll('.run')

scene('game', async (currentLevel: number) => {
  const level = await getLevel(currentLevel)
  renderLevel(level)

  editorView.dispatch({
    changes: {
      from: 0,
      to: editorView.state.doc.length,
      insert: level.script.trim(),
    },
  })

  function run() {
    initKaboom()
    level.beforeScript()
    const script = editorView.state.doc.toString()
    eval(script)
    level.afterScript()
  }

  run()

  buttons.forEach((button) => button.addEventListener('click', run))
})
