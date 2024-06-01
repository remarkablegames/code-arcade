/**
 * Adds white text with black background.
 *
 * @param text - Text.
 * @param options - Options.
 * @returns - Script.
 */
export const addText = (text: string, { pos = '' } = {}) => `
add([rect(width(), 32), color(0, 0, 0), pos(${pos}), z(100)])
add([text(${JSON.stringify(text)}), pos(${pos}), z(100)])
`
