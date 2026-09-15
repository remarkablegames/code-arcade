import { javascript } from '@codemirror/lang-javascript'
import { basicSetup, EditorView } from 'codemirror'

const parent = document.querySelector('#editor')

if (!parent) {
  throw new Error('Missing #editor element')
}

export const editorView = new EditorView({
  extensions: [basicSetup, javascript()],
  parent,
})
