const GAME_NAME = import.meta.env.VITE_APP_NAME

export const GAME_ID = `${GAME_NAME}-${typeof crypto?.randomUUID == 'function' ? crypto.randomUUID() : Date.now()}`
