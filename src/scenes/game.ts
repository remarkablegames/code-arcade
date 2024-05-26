import {
  addEventListeners,
  editorView,
  getLevel,
  initGame,
  renderLevel,
} from '../helpers'
import { Scene } from '../types'

export function initGameScene() {
  scene(Scene.game, async (currentLevel: number) => {
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
      initGame()
      level.prescript()
      const script = editorView.state.doc.toString()
      eval(script)
      level.postscript()
    }

    run()

    addEventListeners(run)
  })
}
