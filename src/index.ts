import './style.css'
import './scenes'

import { Scene } from './types'

const level = Number(new URLSearchParams(location.search).get('level')) || 0

go(Scene.game, level)

// press F1
// debug.inspect = true
