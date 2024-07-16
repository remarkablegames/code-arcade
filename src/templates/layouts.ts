import { GAME_ID } from '../constants'
import { iife } from '../helpers'
import type { Level } from '../types'

/**
 * Wraps code to be rendered inside inline iframe.
 *
 * @param level - Prescript, script, and postscript.
 * @returns - Markup.
 */
export const wrapGame = ({ prescript, script, postscript }: Level) => `
<!DOCTYPE html>
<html>
<head>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100vh;
}
body {
  overflow: hidden;
}
</style>
</head>
<body>
<script src="https://unpkg.com/kaboom@3000.1.17/dist/kaboom.js" integrity="sha512-+4bwhMkroxw4uj24LoIa6vo2KSyaydGiOJ4HZSuOW7HZK9MuKBnibYtRinFiEIZT3NBXnqZrYvL1p0jlJbTqbg==" crossorigin="anonymous"></script>

<script>
kaboom()

window.onerror = (message) => {
  debug.log(message)
}
const { log } = console
console.log = (...args) => {
  log(...args)
  debug.log(args.join(' '))
}

${iife(prescript)}
onLoad(() => {
  ${iife(script)}
  ${iife(postscript)}
})

window.addEventListener('message', (event) => {
  if (event.data?.source !== '${GAME_ID}') {
    return
  }
  debug.log('[HINT] ' + (event.data.hint ?? 'No hint'))
})
</script>
</body>
</html>
`
