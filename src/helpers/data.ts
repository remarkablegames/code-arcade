/**
 * Gets data from localStorage.
 *
 * @param key - Key.
 * @returns - Value.
 */
export function getData(key: string) {
  return localStorage.getItem(key)
}

/**
 * Sets data to localStorage.
 *
 * @param key - Key.
 * @param value - Value.
 */
export function setData(key: string, value: string) {
  localStorage.setItem(key, value)
}
