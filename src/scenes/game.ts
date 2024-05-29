import { setData } from '../helpers'
import {
  addEventListeners,
  editorView,
  getLevel,
  iife,
  renderLevel,
} from '../helpers'
import { wrapGame } from '../templates'
import { Data, Level } from '../types'

const iframe = document.querySelector('iframe') as HTMLIFrameElement

/**
 * Starts level.
 *
 * @param levelNumber - Level number.
 */
export async function go(levelNumber: number) {
  let level: Level

  try {
    level = await getLevel(levelNumber)
  } catch (error) {
    return go(0)
  }

  setData(Data.level, String(levelNumber))
  renderLevel(level)

  editorView.dispatch({
    changes: {
      from: 0,
      to: editorView.state.doc.length,
      insert: level.script?.trim(),
    },
  })

  function run() {
    const script = editorView.state.doc.toString()
    iframe.srcdoc = wrapGame(
      [iife(level.prescript), iife(script), iife(level.postscript)].join('\n'),
    )
  }

  run()

  addEventListeners(run)
}

/**
 * Listen to iframe postMessage on level clear.
 */
addEventListener('message', (event) => {
  const { origin, data } = event

  if (
    !origin.includes(location.origin) ||
    data?.source !== import.meta.env.VITE_APP_NAME
  ) {
    return
  }

  go(event.data.level)
})
