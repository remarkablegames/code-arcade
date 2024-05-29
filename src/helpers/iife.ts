/**
 * Creates an IIFE (Immediately Invoked Function Expression).
 *
 * @param code - Code.
 * @returns - IIFE.
 */
export const iife = (code?: string) =>
  code ? `(function(){${code}\n})();` : ''
