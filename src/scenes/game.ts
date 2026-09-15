import { GAME_ID } from '../constants'
import { setData } from '../helpers'
import {
  addEventListeners,
  editorView,
  getLevel,
  renderLevel,
} from '../helpers'
import { wrapGame } from '../templates'
import { Data, type Level } from '../types'

const iframeElement = document.querySelector('iframe')

if (!iframeElement) {
  throw new Error('Missing iframe element')
}

const iframe: HTMLIFrameElement = iframeElement

/**
 * Starts level.
 *
 * @param levelNumber - Level number.
 */
export async function go(levelNumber: number) {
  let level: Level

  try {
    level = await getLevel(levelNumber)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  run()

  function run() {
    const script = editorView.state.doc.toString()
    iframe.srcdoc = wrapGame({ ...level, script })
  }

  function restart() {
    editorView.dispatch({
      changes: {
        from: 0,
        to: editorView.state.doc.length,
        insert: level.script?.trim(),
      },
    })
    run()
  }

  function hint() {
    iframe.contentWindow?.postMessage({
      source: GAME_ID,
      hint: level.hint,
    })
  }

  addEventListeners(run, restart, hint)
}

/**
 * Listen to iframe postMessage on level clear.
 */
window.addEventListener('message', (event) => {
  const data = event.data as { source?: string; level: number } | undefined

  if (!event.origin.includes(location.origin) || data?.source !== GAME_ID) {
    return
  }

  void go(data.level)
})
