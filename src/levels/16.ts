import {
  loadExit,
  loadPlayer,
  registerPlayerKeys,
  registerWinCondition,
} from '../templates'

export const level = 16
export const title = 'JSON.stringify'

const password = JSON.stringify({ level, year: new Date().getFullYear() })

export const prescript = `
${loadPlayer()}
${loadExit()}
loadSprite('key', 'sprites/key.png')

add([sprite('player'), pos(100, 100), area(), 'player'])

add([sprite('key'), pos(center()), area(), 'key', { password: '${password}' }])

${registerPlayerKeys()}
${registerWinCondition(level)}

onCollide('key', 'player', (key) => {
  if (key.password === '${password}') {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

add([text('Stringify the password')])
`

export const script = `
/**
 * JSON.stringify() is a method that converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing 'level' and 'year'
let password

key.password = password
`
