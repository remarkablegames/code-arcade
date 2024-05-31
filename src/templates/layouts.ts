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
<script src="https://unpkg.com/kaboom@3000.1.17/dist/kaboom.js"></script>

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
</script>
</body>
</html>
`
