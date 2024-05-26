import { javascript } from '@codemirror/lang-javascript'
import { basicSetup, EditorView } from 'codemirror'

export const editorView = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.querySelector('#editor')!,
})
