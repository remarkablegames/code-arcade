import { javascript } from '@codemirror/lang-javascript'
import { basicSetup, EditorView } from 'codemirror'

export function getEditorView() {
  return new EditorView({
    extensions: [basicSetup, javascript()],
    parent: document.querySelector('#editor')!,
  })
}
