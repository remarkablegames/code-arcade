import {
  addText,
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 9
export const title = 'Variables'

const password = (new Date().getFullYear() + level) * 31337

export const prescript = `
${loadPlayer()}
${loadExit()}
loadSprite('key', 'sprites/key.png')

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: ${password} }])

${registerPlayerKeys()}
${registerWinCondition(level)}

onCollide('key', 'player', (key) => {
  if (key.password === ${password}) {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

${addText('Update password & go to key')}
`

export const script = `
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`
