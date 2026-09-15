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
<script src="https://unpkg.com/kaplay@3001.0.19/dist/kaplay.js" integrity="sha512-e6Ye/jWcQIfNO9kq7G5T3LxNURgT6NZ2B2lJ4Mwl6gN26S0rFTkq5euDxKGwv5Gp8xbOGgPcNgATP0ZWbHN65w==" crossorigin="anonymous"></script>

<script>
kaplay()

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
