/**
 * Loads and adds exit.
 *
 * @param options - Options.
 * @returns - Game code.
 */
export const addExit = ({ pos = '' } = {}) => `
${loadExit()}
add([sprite('exit'), anchor('center'), area(), pos(${pos}), 'exit'])
`

/**
 * Loads and adds player.
 *
 * @param options - Options.
 * @returns - Game code.
 */
export const addPlayer = ({ pos = '' } = {}) => `
${loadPlayer()}
add([sprite('player'), anchor('center'), area(), body(), pos(${pos}), 'player'])
`

export const loadBlock = () => `loadSprite('block', 'sprites/steel.png')`

export const loadExit = () => `loadSprite('exit', 'sprites/door.png')`

export const loadEnemy = () => `loadSprite('enemy', 'sprites/ghosty.png')`

export const loadKey = () => `loadSprite('key', 'sprites/key.png')`

export const loadPlayer = () => `loadSprite('player', 'sprites/bean.png')`

export const loadSpike = () => `loadSprite('spike', 'sprites/spike.png')`
