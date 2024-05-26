import { getEditorView, initKaboom } from '../helpers'
import { getLevel } from '../levels'

const button = document.querySelector('button')!

scene('game', async (currentLevel: number) => {
  const level = await getLevel(currentLevel)

  const editorView = getEditorView()

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

  button.addEventListener('click', run)
})
