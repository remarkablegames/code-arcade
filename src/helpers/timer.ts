const noop = () => {}
const { MAX_SAFE_INTEGER } = Number

/**
 * Clears all `setTimeout()` timers.
 */
export function clearAllTimeouts() {
  let id = Number(setTimeout(noop, MAX_SAFE_INTEGER))
  while (id--) {
    clearTimeout(id)
  }
}

/**
 * Clears all `setInterval()` timers.
 */
export function clearAllIntervals() {
  let id = Number(setInterval(noop, MAX_SAFE_INTEGER))
  while (id--) {
    clearInterval(id)
  }
}

/**
 * Clears all `setTimeout()` and `setInterval()` timers.
 */
export function clearAllTimers() {
  clearAllTimeouts()
  clearAllIntervals()
}
