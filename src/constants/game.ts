export const GAME_ID = `${import.meta.env.VITE_APP_NAME}-${typeof crypto?.randomUUID == 'function' ? crypto.randomUUID() : Date.now()}`
