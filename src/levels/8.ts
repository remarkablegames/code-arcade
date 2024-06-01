import {
  addExit,
  addPlayer,
  addText,
  registerDisableMovement,
  registerWinCondition,
} from '../templates'

export const level = 8
export const title = 'Objects'
export const hint = 'Change the coordinates'

export const prescript = `
${addPlayer()}
${addExit({ pos: '550, 550' })}

${registerDisableMovement()}
${registerWinCondition(level)}

${addText('Reposition me')}
`

export const script = `
/**
 * An object is a collection of properties (key-value pairs)
 */

const coordinates = {
  x: 50,
  y: 75,
}

const player = get('player')[0]
player.pos.x = coordinates.x
player.pos.y = coordinates.y
`
