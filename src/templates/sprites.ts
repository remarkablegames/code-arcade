/**
 * Loads and adds exit.
 *
 * @param options - Options.
 * @returns - Script.
 */
export const addExit = ({ pos = '' } = {}) => `
${loadExit()}
add([
  sprite('exit'),
  anchor('center'),
  area({ scale: 0.7, offset: vec2(0, 10) }),
  pos(${pos}),
  'exit',
])
`

/**
 * Loads and adds key.
 *
 * @param options - Options.
 * @returns - Script.
 */
export const addKey = ({ pos = '', obj = '' } = {}) => `
${loadKey()}
add([
  sprite('key'),
  anchor('center'),
  area(),
  pos(${pos}),
  'key',
  ${obj},
])
`

/**
 * Loads and adds player.
 *
 * @param options - Options.
 * @returns - Script.
 */
export const addPlayer = ({ pos = '' } = {}) => `
${loadPlayer()}
add([
  sprite('player'),
  anchor('center'),
  area({ scale: 0.9 }),
  body(),
  pos(${pos}),
  'player',
])
`

export const loadBlock = () => `loadSprite('block', 'sprites/steel.png')`

export const loadEgg = () => `loadSprite('egg', 'sprites/egg.png')`

export const loadExit = () => `loadSprite('exit', 'sprites/door.png')`

export const loadEnemy = () => `loadSprite('enemy', 'sprites/ghosty.png')`

export const loadKey = () => `loadSprite('key', 'sprites/key.png')`

export const loadPlayer = () => `loadSprite('player', 'sprites/bean.png')`

export const loadSpike = () => `loadSprite('spike', 'sprites/spike.png')`
