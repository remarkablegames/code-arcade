import './style.css'
import './scenes'

const level = Number(new URLSearchParams(location.search).get('level')) || 0

go('game', level)

// press F1
// debug.inspect = true
