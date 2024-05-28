import {
  addEventListeners,
  editorView,
  getLevel,
  initGame,
  renderLevel,
} from '../helpers'
import { Level, Scene } from '../types'

export function initGameScene() {
  scene(Scene.game, async (currentLevel: number) => {
    let level: Level

    try {
      level = await getLevel(currentLevel)
    } catch (error) {
      return go(Scene.game, 0)
    }

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
      const fun = new Function(script)
      fun()
      level.postscript()
    }

    run()

    addEventListeners(run)
  })
}
